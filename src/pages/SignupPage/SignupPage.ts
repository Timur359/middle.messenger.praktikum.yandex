import { validateFunc } from "@utils/ValidateFunc";
import { Block } from "@Core";
import { FormInput } from "@components";
import { FormDataLogger } from "@utils/FormDataLogger";

import SignupPageHbs from "./SignupPage.hbs";

export class SignupPage extends Block {
  constructor() {
    super({
      validateFunc,
      onSignup: (e: MouseEvent) =>
        FormDataLogger(this.refs as Record<string, FormInput>, e),
    });
  }

  protected render() {
    return SignupPageHbs;
  }
}
