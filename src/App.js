import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import SingleArtist from "./components/SingleArtist.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import News from "./components/News.jsx";
import NotFound from "./components/NotFound.jsx";
import Error from "./components/Error.jsx";
import "./App.css";

export default function App(){

    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artists/:artist" element={<SingleArtist/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/*" element={<Error />} />
                <Route path="/not_found" element={<NotFound />} />
            </Routes>
        </div>
    );
};