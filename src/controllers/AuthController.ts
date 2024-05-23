import { UserSignUpModel } from "@models/UserSignUpModel";
import { AppStore } from "@Core/AppStore";
import { Router } from "@app/appRouting";
import { AuthService } from "@services/Auth";

class AuthController {
  getUserInfo() {
    return AuthService.getUserInfo().then((data) =>
      AppStore.set({ user: data.response })
    );
  }

  signIn(login: string, password: string) {
    return AuthService.signIn(login, password).then(() => this.getUserInfo());
  }

  signUp(user: UserSignUpModel) {
    return AuthService.signUp(user).then(() => {
      this.getUserInfo();
      Router.go("/messenger");
    });
  }

  logout() {
    return AuthService.logout().then(() => Router.go("/"));
  }
}

const instance = new AuthController();
export { instance as AuthController };
