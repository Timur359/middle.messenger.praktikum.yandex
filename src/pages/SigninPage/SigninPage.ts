import { validateFunc } from "@utils/ValidateFunc";
import { Block } from "@Core";
import { FormInput } from "@components";
import { FormDataLogger } from "@utils/FormDataLogger";

import SigninPageHbs from "./SigninPage.hbs";

export class SigninPage extends Block {
  constructor() {
    super({
      validateFunc,
      onSignin: (e: MouseEvent) =>
        FormDataLogger(this.refs as Record<string, FormInput>, e),
    });
  }

  protected render() {
    return SigninPageHbs;
  }
}
