import css from './dialog.module.css';

import { motion } from 'framer-motion';

import { transition, variants } from './dialog.motion';

interface DialogProps {
  children: any;
  open?: boolean;
}

export function Dialog({ children, open }: DialogProps) {
  return (
    <div className={css.dialogBackdrop}>
      <motion.dialog
        className={css.dialog}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={transition}
        open={open}>
        {children}
      </motion.dialog>
    </div>
  );
}
