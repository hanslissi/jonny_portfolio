import React from "react";
import { motion } from "framer-motion";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { DURATION_FAST } from "../../../constants/animationConstants";

interface InputErrorProps {
  message:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const InputError = ({ message }: InputErrorProps) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 h-full text-red-500 text-sm bg-red-100 rounded-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: DURATION_FAST }}
    >
      {message?.toString()}
    </motion.p>
  );
};

export default InputError;
