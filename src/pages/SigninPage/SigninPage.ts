import { Router } from "@app/appRouting";
import { Block } from "@Core";
import { ValidateFunc } from "@utils/ValidateFunc";
import { FormInput } from "@components/FormInput";
import { AuthController } from "@app/controllers/AuthController";
import { GetRefsInputsValues } from "@utils/GetRefsInputsValues";
import { connect } from "@Core/connect";
import { AppStore } from "@Core/AppStore";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";

import SigninPageHbs from "./SigninPage.hbs";

type SigninPageInputs = {
  login: string;
  password: string;
};

/** Страница входа в учетную запись */
class SigninPage extends Block {
  constructor() {
    super({
      ValidateFunc,
      noAccountHandler: () => {
        Router.go("/signup");
      },
      loginHandler: () => {
        const formValues = GetRefsInputsValues(
          this.refs as Record<keyof SigninPageInputs, FormInput>
        );
        if (Object.values(formValues).some((x) => !x)) {
          return null;
        }
        AuthController.signIn(formValues.login, formValues.password)
          .then(() => {
            AuthController.getUserInfo();
            Router.go("/messenger");
          })
          .catch(ApiErrorHandler);
      },
    });
  }

  componentDidMount(): void {
    AppStore.clear();
  }

  protected render() {
    return SigninPageHbs;
  }
}

const instance = connect(({ chats, user }) => ({ chats, user }))(SigninPage);
export { instance as SigninPage };
