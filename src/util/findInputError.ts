import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";

export type InputErrorType = {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export function findInputError(
  errors: FieldErrors<FieldValues>,
  label: string,
): InputErrorType {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(label))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
  return filtered;
}
