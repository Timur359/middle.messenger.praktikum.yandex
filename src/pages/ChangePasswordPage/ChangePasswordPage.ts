import { Block } from "@Core";
import { ValidateFunc } from "@utils/ValidateFunc";
import { FormInput } from "@components/FormInput";
import { Router } from "@app/appRouting";
import { connect } from "@Core/connect";
import { Indexed } from "@app/types/Indexed";
import { UserModel } from "@models/UserModel";
import { UserController } from "@app/controllers/UserController";
import { GetFormRefsData } from "@utils/GetFormRefsData";
import { PasswordChangeModel } from "@models/PasswordChangeModel";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";

import ChangePasswordPageHbs from "./ChangePasswordPage.hbs";

interface IChangePasswordPageProps extends Indexed {
  user: UserModel;
}

class ChangePasswordPage extends Block<IChangePasswordPageProps> {
  constructor(props: IChangePasswordPageProps) {
    super({
      ...props,
      ValidateFunc,
      confirmValidateFn: (password: string) => {
        const newPassword = (this.refs.newPassword as FormInput).value();
        return password === newPassword ? "" : "Введенные пароли не совпадают";
      },
      saveHandler: () => {
        const formData = GetFormRefsData(
          this.refs as Record<keyof UserModel, FormInput>
        );
        UserController.changeUserPassword(
          formData as unknown as PasswordChangeModel
        ).catch(ApiErrorHandler);
      },
      backHandler: () => Router.go("/messenger"),
    });
  }

  protected render() {
    return ChangePasswordPageHbs;
  }
}

const instance = connect(({ user }) => ({ user }))(ChangePasswordPage);
export { instance as ChangePasswordPage };
