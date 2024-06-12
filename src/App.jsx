import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import AboutUs from './pages/Aboutus';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<AboutUs />} path="/AboutUs" />
      </Routes>
    </BrowserRouter>
  );
}
