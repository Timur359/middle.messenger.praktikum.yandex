import { ModalService } from "@modals/ModalService";
import { Block } from "@Core";

import InfoModalHbs from "./InfoModal.hbs";

export class InfoModal extends Block {
  constructor() {
    super({
      okHandler: () => {
        ModalService.close("info-modal");
      },
      message: ModalService.getParams("info-modal")?.message,
    });
  }

  protected render() {
    return InfoModalHbs;
  }
}
