import "./style.scss";

import { RegisterPartials } from "@Core/RegisterPartials";
import { Block } from "@Core";
import * as Pages from "@Pages";

RegisterPartials();

const blockPages: Partial<
  Record<string, typeof Block<Record<string, unknown>>>
> = {
  signin: Pages.SigninPage,
  signup: Pages.SignupPage,
  main: Pages.MainPage,
  profile: Pages.ProfilePage,
  editProfile: Pages.ProfilePage,
  error: Pages.ErrorPage,
  notFound: Pages.ErrorPage,
};

function navigate(page: keyof typeof blockPages) {
  const app = document.getElementById("app")!;

  const BlockComponent = blockPages[page];

  let component;
  switch (page) {
    case "editProfile":
      component = new BlockComponent!({ edit: true });
      break;

    case "error":
      component = new BlockComponent!({
        code: "500",
        description: "Мы уже фиксим",
      });
      break;

    case "notFound":
      component = new BlockComponent!({
        code: "404",
        description: "Не туда попали",
      });
      break;

    default:
      component = new BlockComponent!();
      break;
  }

  app.innerHTML = "";
  app?.append(component.getContent()!);
}

navigate("signin");

document.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;
  const page = target.getAttribute("linkTo");
  if (page) {
    navigate(page as keyof typeof blockPages);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
