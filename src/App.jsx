import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import AboutUs from './pages/Aboutus';

const basename = import.meta.env.VITE_PUBLIC_URL || '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<AboutUs />} path="/AboutUs" />
      </Routes>
    </BrowserRouter>
  );
}
