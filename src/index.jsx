import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/app/app';

import './style.css';

const rootElement = document.querySelector('#root');

const reactRoot = createRoot(rootElement);
reactRoot.render(<App />);
