import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

import { Main } from '../game/scenes/main';

const GAME_WIDTH = 600;
const GAME_HEIGHT = GAME_WIDTH * 1.5;

export function Game({ gameRef }) {
  const gameElementRef = useRef(null);

  useEffect(() => {
    const game = new Phaser.Game({
      scene: [Main],
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      transparent: true,
      physics: {
        default: 'matter',
        matter: {
          // debug: true,
          positionIterations: 8,
          velocityIterations: 6,
          constraintIterations: 4
        }
      },
      parent: gameElementRef.current
      // scale: {
      //   width: GAME_WIDTH,
      //   height: GAME_HEIGHT,
      //   parent: gameElementRef.current,
      //   expandParent: false,
      //   mode: Phaser.Scale.ScaleModes.WIDTH_CONTROLS_HEIGHT
      // }
    });

    gameRef.current = game;

    return () => {
      gameRef.current.destroy();
    };
  }, []);

  return <div ref={gameElementRef} />;
}
