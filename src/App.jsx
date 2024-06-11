import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutUs from "./pages/Aboutus";

export default function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<AboutUs />} path="/AboutUs" />
      </Routes>
    </BrowserRouter>
  );
}