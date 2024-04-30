import { FormInput } from "@components";

export const FormDataLogger = (
  refs: Record<string, FormInput>,
  e: MouseEvent
) => {
  e.preventDefault();

  const formData = Object.fromEntries(
    Object.entries(refs).map(([name, input]) => [name, input.value()])
  );

  console.log(formData);

  if (Object.values(formData).some((x) => !x)) {
    e.stopPropagation();
  }
};
