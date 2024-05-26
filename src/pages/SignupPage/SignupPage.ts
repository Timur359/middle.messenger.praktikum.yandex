import { Block } from "@Core";
import { ValidateFunc } from "@utils/ValidateFunc";
import { FormInput } from "@components/FormInput";
import { GetRefsInputsValues } from "@utils/GetRefsInputsValues";
import { UserSignUpModel } from "@models/UserSignUpModel";
import { AuthController } from "@app/controllers/AuthController";
import { Router } from "@app/appRouting";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";

import SignupPageHbs from "./SignupPage.hbs";

export class SignupPage extends Block {
  constructor() {
    super({
      ValidateFunc,
      signUpHandler: () => {
        const formValues = GetRefsInputsValues(
          this.refs as Record<keyof UserSignUpModel, FormInput>
        );
        if (Object.values(formValues).some((x) => !x)) {
          return null;
        }
        AuthController.signUp(formValues).catch(ApiErrorHandler);
      },
      lognHandler() {
        Router.go("/");
      },
    });
  }

  protected render() {
    return SignupPageHbs;
  }
}
