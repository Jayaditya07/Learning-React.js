import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Service from "./pages/service";
import About from "./pages/about";
import Fotter from "./components/Fotter";

export default function App() {
    return (
        <div>
            <BrowserRouter>

                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/About" element={<About />} />
                </Routes>

                <Fotter />

            </BrowserRouter>
        </div>
    );
}