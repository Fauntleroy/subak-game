import React from 'react';
import { createRoot } from 'react-dom';

import { App } from './components/app';

import './style.css';

const rootElement = document.querySelector('#root');

const reactRoot = createRoot(rootElement);
reactRoot.render(<App />);
