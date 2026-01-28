import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import css from "./App.css";

export default function App(){

    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};