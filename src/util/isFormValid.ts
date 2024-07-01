import { InputErrorType } from "./findInputError";

export function isFormInvalid(error: InputErrorType): boolean {
  if (Object.keys(error).length > 0) {
    return true;
  }
  return false;
}
