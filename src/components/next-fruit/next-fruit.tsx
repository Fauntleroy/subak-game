import css from './next-fruit.module.css';

import { AnimatePresence, motion } from 'framer-motion';

import { NextFruitType } from '../../store';
import { transition, variants } from './next-fruit.motion';

interface NextFruitProps {
  nextFruit: NextFruitType | null;
}

export function NextFruit({ nextFruit }: NextFruitProps) {
  return (
    <div className={css.nextFruitSlot}>
      <AnimatePresence>
        {nextFruit && (
          <motion.img
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className={css.nextFruitImage}
            src={`./${nextFruit.name}.png`}
            key={nextFruit.uuid}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
