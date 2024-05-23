import { Block } from "@Core";
import { Indexed } from "@app/types/Indexed";
import { connect } from "@Core/connect";
import { ChatsController } from "@app/controllers/ChatsController";
import { AuthController } from "@app/controllers/AuthController";
import { ModalService } from "@modals/ModalService";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";

import MainPageHbs from "./MainPage.hbs";

interface IMainPageProps extends Indexed {
  test: () => void;
}
class MainPage extends Block<IMainPageProps> {
  constructor(props: IMainPageProps) {
    super({
      ...props,
      addChatHandler: () => {
        ModalService.show("add-chat-modal", null);
      },
    });
  }

  componentDidMount(): void {
    ChatsController.getChats().catch(ApiErrorHandler);
    AuthController.getUserInfo().catch(ApiErrorHandler);
  }

  protected render() {
    return MainPageHbs;
  }
}

const instance = connect(({ chats }) => ({ chats }))(MainPage);
export { instance as MainPage };
