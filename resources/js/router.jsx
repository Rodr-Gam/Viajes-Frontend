import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/public/Landing';
//import Login   from './pages/Login';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"      element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;