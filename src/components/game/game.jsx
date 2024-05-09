import css from './game.module.css';

import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import cx from 'classnames';
import { useStore } from 'zustand';

import store from '../../store';

import { Main } from '../../game/scenes/main';

const GAME_WIDTH = 300;
const GAME_HEIGHT = GAME_WIDTH * 1.5;
const DPR = window.devicePixelRatio || 1;

const useBoundStore = (selector) => useStore(store, selector);

export function Game({ gameRef }) {
  const gameElementRef = useRef(null);
  const isGameOver = useBoundStore((state) => state.isGameOver);

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
        roundPixels: false
      },
      physics: {
        default: 'matter',
        matter: {
          // debug: true,
          positionIterations: 8,
          velocityIterations: 6,
          constraintIterations: 4,
          gravity: { x: 0, y: window.devicePixelRatio * 0.75 }
        }
      },
      parent: gameElementRef.current,
      scale: {
        width: GAME_WIDTH * DPR,
        height: GAME_HEIGHT * DPR,
        zoom: 1 / DPR
        // parent: gameElementRef.current,
        // expandParent: false,
        // mode: Phaser.Scale.ScaleModes.WIDTH_CONTROLS_HEIGHT
      },
      input: {
        mouse: { target: window },
        touch: { target: window }
      }
    });

    gameRef.current = game;

    return () => {
      gameRef.current.destroy();
    };
  }, []);

  return <div className={className} ref={gameElementRef} />;
}
