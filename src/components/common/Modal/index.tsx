import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal = ({ open, children, onClose }: ModalProps) => {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          className="relative z-50"
        >
          <motion.div
            variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900 bg-opacity-75"
          />

          <div className="fixed pointer-events-none inset-0 overflow-y-auto z-50">
            <div className="flex pointer-events-none min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
              <motion.div
                variants={{
                  closed: {
                    opacity: "var(--opacity-from)",
                    scale: "var(--scale-from, 1)",
                    y: "var(--y-from, 0px)",
                  },
                  open: {
                    opacity: "var(--opacity-to)",
                    scale: "var(--scale-to, 1)",
                    y: "var(--y-to, 0px)",
                  },
                }}
                className="relative pointer-events-auto overflow-hidden glasscard-dark p-4 shadow-lg w-full sm:max-w-lg
                                            max-sm:[--y-from:16px] sm:[--scale-from:80%] [--opacity-from:0%]
                                            max-sm:[--y-to:0px] sm:[--scale-to:100%] [--opacity-to:100%]"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
