import { AddUserModal } from "@modals/AddUserModal";
import { RemoveUserModal } from "@modals/RemoveUserModal";
import { AddChatModal } from "@modals/AddChatModal";
import { InfoModalParams } from "@models/InfoModalParams";

import { InfoModal } from "./InfoModal";

export const ModalRegistry = {
  "info-modal": InfoModal,
  "add-user-modal": AddUserModal,
  "remove-user-modal": RemoveUserModal,
  "add-chat-modal": AddChatModal,
};
export interface ModalRegistryTypes {
  "info-modal": InfoModalParams;
  "add-user-modal": null;
  "remove-user-modal": null;
  "add-chat-modal": null;
}

export type ModalKey = Extract<keyof ModalRegistryTypes, string>;
