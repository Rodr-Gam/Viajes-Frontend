/** @jsxRuntime classic */
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return <h1>React funcionando</h1>;
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);