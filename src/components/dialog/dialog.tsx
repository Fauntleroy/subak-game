import css from './dialog.module.css';

// import { motion } from 'framer-motion';

// import { transition, variants } from './dialog.motion';

interface DialogProps {
  children: any;
  open?: boolean;
}

export function Dialog({ children, open }: DialogProps) {
  return (
    <div className={css.dialogBackdrop}>
      <dialog className={css.dialog} open={open}>
        {children}
      </dialog>
    </div>
  );
}
