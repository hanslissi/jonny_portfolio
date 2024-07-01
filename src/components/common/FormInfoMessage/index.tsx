import React from "react";
import { motion } from "framer-motion";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { DURATION_FAST } from "../../../constants/animationConstants";
import clsx from "clsx";

interface FormInfoMessageProps {
  message:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  type: "info" | "error" | "success";
}

const FormInfoMessage = ({ message, type = "info" }: FormInfoMessageProps) => {
  return (
    <motion.p
      className={clsx(
        "flex items-center gap-1 px-2 py-1 h-full font-semibold text-sm rounded-md",
        {
          "text-red-500 bg-red-100": type === "error",
          "text-green-500 bg-green-100": type === "success",
          "text-primary bg-blue-100": type === "info",
        }
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: DURATION_FAST }}
    >
      {message?.toString()}
    </motion.p>
  );
};

export default FormInfoMessage;
