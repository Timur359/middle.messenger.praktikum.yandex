import * as Pages from "@Pages";
import { Block, Router } from "@Core";

type BlockType = typeof Block;

const appRoutes: Record<string, BlockType> = {
  "/": Pages.SigninPage as BlockType,
  "/signup": Pages.SignupPage as BlockType,
  "/profile": Pages.ProfilePage as BlockType,
  "/messenger": Pages.MainPage as BlockType,
  "/error": Pages.ErrorPage as BlockType,
  "/change-password": Pages.ChangePasswordPage as BlockType,
};

const router = new Router("#root");

Object.keys(appRoutes).forEach((route) => router.use(route, appRoutes[route]));

export { router as Router };
