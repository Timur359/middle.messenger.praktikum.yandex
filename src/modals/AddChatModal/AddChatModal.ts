import { ModalService } from "@modals/ModalService";
import { ChatsController } from "@app/controllers/ChatsController";
import { Indexed } from "@app/types/Indexed";
import { AppStore } from "@Core/AppStore";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";
import { connect } from "@Core/connect";
import { ChatModel } from "@models/ChatModel";
import { FormInput } from "@components/FormInput";
import { Block } from "@Core";

import AddChatModalHbs from "./AddChatModal.hbs";

interface IAddChatModalProps extends Indexed {
  currentChat: ChatModel;
}

class AddChatModal extends Block<IAddChatModalProps> {
  constructor(props: IAddChatModalProps) {
    super({
      ...props,
      addHandler: () => {
        ChatsController.addChat((this.refs.name as FormInput).value() as string)
          .then(() => ChatsController.getChats())
          .catch(ApiErrorHandler);

        AppStore.set({ isChatContextPopupOpened: false });
        ModalService.close("add-chat-modal");
      },
      closeHandler: () => {
        ModalService.close("add-chat-modal");
      },
    });
  }

  protected render() {
    return AddChatModalHbs;
  }
}

const instance = connect(({ currentChat }) => ({ currentChat }))(AddChatModal);
export { instance as AddChatModal };
