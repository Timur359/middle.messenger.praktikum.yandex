import { MessageModel } from "./MessageModel";

export interface ChatsListModel {
  name: string;
  time: string;
  messages: MessageModel[];
  messagesCount: number;
}
