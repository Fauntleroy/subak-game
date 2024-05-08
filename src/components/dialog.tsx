import css from './dialog.module.css';

import React from 'react';

export function Dialog({ children, open }: { children: any; open?: boolean }) {
  return (
    <dialog className={css.dialog} open={open}>
      {children}
    </dialog>
  );
}
