import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';

// Punto de entrada — solo monta el router en el div#app del blade
const root = createRoot(document.getElementById('app'));
root.render(<AppRouter />);
