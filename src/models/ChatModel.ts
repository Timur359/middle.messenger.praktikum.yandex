import { MessageModel } from "@models/MessageModel";

export interface ChatModel {
  id: number;
  title: string;
  avatar: string;
  created_by: number;
  last_message: MessageModel;
  unread_count: number;
}
