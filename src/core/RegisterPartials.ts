import { Block, RegisterComponent } from "@Core";
import * as Components from "@components";

/**
 * Функция регистрации компонентов
 */
export const RegisterPartials = () => {
  Object.entries(Components).forEach(([name, component]) => {
    RegisterComponent(name, component as typeof Block);
  });
};
