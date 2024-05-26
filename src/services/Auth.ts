import { UserWithIdModel } from "@models/UserWithIdModel";
import { UserSignUpModel } from "@models/UserSignUpModel";
import { BaseApi } from "@services/BaseApi";
import { HTTP, HttpMethodResp } from "@utils/HttpTransport";

class AuthService extends BaseApi {
  getUserInfo() {
    return HTTP.get(this.restUrl("auth/user"), {
      headers: { "Content-Type": "application/json" },
    }) as HttpMethodResp<UserWithIdModel>;
  }

  signIn(login: string, password: string) {
    return HTTP.post(this.restUrl("auth/signin"), {
      data: {
        login,
        password,
      },
      headers: { "Content-Type": "application/json" },
    });
  }

  signUp(user: UserSignUpModel) {
    return HTTP.post(this.restUrl("auth/signup"), {
      data: { ...user },
      headers: { "Content-Type": "application/json" },
    });
  }

  logout() {
    return HTTP.post(this.restUrl("auth/logout"), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

const instance = new AuthService();
export { instance as AuthService };
