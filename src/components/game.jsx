import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

import { Main } from '../game/scenes/main';

const GAME_WIDTH = 300;
const GAME_HEIGHT = GAME_WIDTH * 1.5;
const DPR = window.devicePixelRatio;
// const DPR = 1;

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
      }
    });

    gameRef.current = game;

    return () => {
      gameRef.current.destroy();
    };
  }, []);

  return <div ref={gameElementRef} />;
}
