import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styling/index.css';
import App from './components/App';

const conatiner = document.getElementById("root") as HTMLElement;
const root = createRoot(conatiner);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);