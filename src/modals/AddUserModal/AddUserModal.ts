import { ModalService } from "@modals/ModalService";
import { UserController } from "@app/controllers/UserController";
import { ChatsController } from "@app/controllers/ChatsController";
import { Indexed } from "@app/types/Indexed";
import { FormInput } from "@components/FormInput";
import { connect } from "@Core/connect";
import { Block } from "@Core";
import { ChatModel } from "@models/ChatModel";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";

import AddUserModalHbs from "./AddUserModal.hbs";

interface IAddUserModalProps extends Indexed {
  currentChat: ChatModel;
}

class AddUserModal extends Block<IAddUserModalProps> {
  constructor(props: IAddUserModalProps) {
    super({
      ...props,
      addHandler: () => {
        UserController.searchUser(
          (this.refs.login as FormInput).value() as string
        )
          .then((users) => {
            ChatsController.addUserToChat({
              chatId: this.props.currentChat.id,
              users: [users[0].id],
            }).catch(ApiErrorHandler);
          })
          .catch(ApiErrorHandler);

        ModalService.close("add-user-modal");
      },
      closeHandler: () => {
        ModalService.close("add-user-modal");
      },
    });
  }

  protected render() {
    return AddUserModalHbs;
  }
}

const instance = connect(({ currentChat }) => ({ currentChat }))(AddUserModal);
export { instance as AddUserModal };
