import React from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import { findInputError } from "../../../util/findInputError";
import { isFormInvalid } from "../../../util/isFormValid";
import { AnimatePresence } from "framer-motion";
import InputError from "../InputError";

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  validation: RegisterOptions<FieldValues, string>;
  name: string;
}

const Input = ({ type, id, placeholder, validation, name }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-end h-6">
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error?.message}
              key={inputError.error?.message?.toString()}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        id={id}
        type={type}
        className="w-full p-4 card-dark rounded-xl placeholder:opacity-60 focus-ring-primary"
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
};

export default Input;
