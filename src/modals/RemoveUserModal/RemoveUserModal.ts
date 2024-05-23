import { Block } from "@Core";
import { ModalService } from "@modals/ModalService";
import { ChatsController } from "@app/controllers/ChatsController";
import { connect } from "@Core/connect";
import { Indexed } from "@app/types/Indexed";
import { ChatModel } from "@models/ChatModel";
import { SelectOption } from "@components/SimpleSelect/SimpleSelect";
import { FormSelect } from "@components/FormSelect";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";

import RemoveUserModalHbs from "./RemoveUserModal.hbs";

export interface IRemoveUserModalProps extends Indexed {
  currentChat: ChatModel;
  users: SelectOption[];
}

class RemoveUserModal extends Block<IRemoveUserModalProps> {
  constructor(props: IRemoveUserModalProps) {
    super({
      ...props,
      removeHandler: () => {
        ChatsController.deleteChatUsers({
          chatId: this.props.currentChat.id,
          users: [parseInt((this.refs.select as FormSelect).value(), 10)],
        }).catch(ApiErrorHandler);

        ModalService.close("remove-user-modal");
      },
      closeHandler: () => {
        ModalService.close("remove-user-modal");
      },
    });
  }

  componentDidMount(): void {
    ChatsController.getChatUsers(this.props.currentChat.id)
      .then((users) => {
        this.props.users = users.response.map((user) => ({
          title: user.first_name,
          value: user.id,
        }));
      })
      .catch(ApiErrorHandler);
  }

  protected render() {
    return RemoveUserModalHbs;
  }
}

const instance = connect(({ currentChat }) => ({ currentChat }))(
  RemoveUserModal
);
export { instance as RemoveUserModal };
