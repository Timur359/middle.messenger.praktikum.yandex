import chats from "@services/stubs/ContactsStubData";
import { Block } from "@Core";

import MessagesListHbs from "./MessagesList.hbs";

export class MessagesList extends Block {
  constructor() {
    super();
    this.props.messages = [chats[1].last_message];
    this.props.title = chats[1].title;
  }

  protected render() {
    return MessagesListHbs;
  }
}