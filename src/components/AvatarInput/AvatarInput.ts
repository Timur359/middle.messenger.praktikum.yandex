import { Block } from "@Core";
import { Indexed } from "@app/types/Indexed";
import { UserController } from "@app/controllers/UserController";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";

import AvatarInputHbs from "./AvatarInput.hbs";

interface IAvatarInputProps extends Indexed {
  avatarId: string;
}

export class AvatarInput extends Block<IAvatarInputProps> {
  constructor(props: IAvatarInputProps) {
    super({
      ...props,
      avatarUri: `https://ya-praktikum.tech/api/v2/resources${props.avatarId}`,
    });
    this.props.events = {
      click: () => {
        const avatarInput = document.getElementById("avatar-input");
        if (avatarInput) {
          avatarInput.click();
          avatarInput.onchange = (e: Event) => {
            const filesList = (e.target as HTMLInputElement)?.files ?? [];
            UserController.setAvatar(filesList[0]).catch(ApiErrorHandler);
          };
        }
      },
    };
  }

  protected render() {
    return AvatarInputHbs;
  }
}
