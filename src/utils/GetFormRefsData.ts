import { FormInput } from "@components/FormInput";

export function GetFormRefsData(refs: Record<string, FormInput>) {
  return Object.fromEntries(
    Object.entries(refs).map(([name, input]) => [name, input.value()])
  );
}
