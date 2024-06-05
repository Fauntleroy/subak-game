import css from './next-fruit.module.css';

// import { AnimatePresence, motion } from 'framer-motion';

import { NextFruitType } from '../../store';
// import { transition, variants } from './next-fruit.motion';

interface NextFruitProps {
  nextFruit: NextFruitType | null;
}

export function NextFruit({ nextFruit }: NextFruitProps) {
  return (
    <div className={css.nextFruitSlot}>
      {/* <AnimatePresence> */}
      {nextFruit && (
        <img
          className={css.nextFruitImage}
          src={`./${nextFruit.name}.png`}
          key={nextFruit.uuid}
        />
      )}
      {/* </AnimatePresence> */}
    </div>
  );
}
