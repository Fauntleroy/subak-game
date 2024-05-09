import css from './dialog.module.css';

import React from 'react';

interface DialogProps {
  children: any;
  open?: boolean;
}

export function Dialog({ children, open }: DialogProps) {
  return (
    <dialog className={css.dialog} open={open}>
      {children}
    </dialog>
  );
}
