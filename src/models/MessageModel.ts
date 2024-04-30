import { UserModel } from "@models/UserModel";

export interface MessageModel {
  user: UserModel;
  time: string;
  content: string;
}
