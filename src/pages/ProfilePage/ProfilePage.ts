import { Block } from "@Core";
import { ValidateFunc } from "@utils/ValidateFunc";
import { FormInput } from "@components/FormInput";
import { Router } from "@app/appRouting";
import { connect } from "@Core/connect";
import { Indexed } from "@app/types/Indexed";
import { UserModel } from "@models/UserModel";
import { UserController } from "@app/controllers/UserController";
import { GetFormRefsData } from "@utils/GetFormRefsData";
import { AuthController } from "@app/controllers/AuthController";
import { ApiErrorHandler } from "@utils/ApiErrorHandler";

import ProfilePageHbs from "./ProfilePage.hbs";

interface IProfilePageProps extends Indexed {
  edit: boolean;
  user: UserModel;
}

class ProfilePage extends Block<IProfilePageProps> {
  constructor(props: IProfilePageProps) {
    super({
      ...props,
      ValidateFunc,
      saveHandler: () => {
        const formData = GetFormRefsData(
          this.refs as Record<keyof UserModel, FormInput>
        );
        UserController.changeUserProfile(
          formData as unknown as UserModel
        ).catch(ApiErrorHandler);
      },
      logoutHandler: () => {
        AuthController.logout().catch(ApiErrorHandler);
      },
      changePasswordHandler: () => {
        Router.go("/change-password");
      },
      backHandler: () => Router.go("/messenger"),
      editProfileHandler: () => Router.go("/profile", { edit: true }),
    });
  }

  protected render() {
    return ProfilePageHbs;
  }
}

const instance = connect(({ user }) => ({ user }))(ProfilePage);
export { instance as ProfilePage };
