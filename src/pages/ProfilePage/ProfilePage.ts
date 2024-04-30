import { validateFunc } from "@utils/ValidateFunc";
import { Block } from "@Core";
import { FormDataLogger } from "@utils/FormDataLogger";
import { FormInput } from "@components";

import ProfilePageHbs from "./ProfilePage.hbs";

interface IProfilePageProps {
  [key: string]: unknown;
  edit: boolean;
}

export class ProfilePage extends Block<IProfilePageProps> {
  constructor(props: IProfilePageProps) {
    super({
      ...props,
      validateFunc,
      onSave: (e: MouseEvent) =>
        FormDataLogger(this.refs as Record<string, FormInput>, e),
    });
  }

  protected render() {
    return ProfilePageHbs;
  }
}
