import css from './game.module.css';

import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import cx from 'classnames';
import { useStore } from 'zustand';

import store from '../../store';

import { Main } from '../../game/scenes/main';

const GAME_WIDTH = 300;
const GAME_HEIGHT = GAME_WIDTH * 1.5;
const DPR = window.devicePixelRatio || 1;

interface GameProps {
  gameRef: React.MutableRefObject<Phaser.Game | null>;
}

export function Game({ gameRef }: GameProps) {
  const gameElementRef = useRef<HTMLDivElement>(null);
  const isGameOver = useStore(store, (state) => state.isGameOver);
  const isTouchDevice =
    typeof window.ontouchstart === 'function' || navigator.maxTouchPoints > 0;

  const className = cx(css.game, {
    [css.isGameOver]: isGameOver
  });

  useEffect(() => {
    const game = new Phaser.Game({
      scene: [Main],
      width: GAME_WIDTH, // 300
      height: GAME_HEIGHT, // 450
      transparent: true,
      render: {
        mipmapFilter: 'LINEAR_MIPMAP_LINEAR',
        antialias: true,
        antialiasGL: true,
        roundPixels: false,
        pixelArt: false
      },
      physics: {
        default: 'matter',
        matter: {
          // debug: true,
          positionIterations: 8,
          velocityIterations: 6,
          constraintIterations: 4,
          gravity: { x: 0, y: window.devicePixelRatio },
          autoUpdate: false
        }
      },
      parent: gameElementRef.current || undefined,
      scale: {
        width: GAME_WIDTH * DPR,
        height: GAME_HEIGHT * DPR,
        zoom: 1 / DPR
      }
    });

    gameRef.current = game;

    return () => {
      gameRef?.current?.destroy(false);
    };
  }, []);

  return (
    <>
      <div className={className} ref={gameElementRef} />
      {isTouchDevice && (
        <div className={css.touchControl}>
          Press down and slide.
          <br />
          Release to drop.
        </div>
      )}
    </>
  );
}
