import React, { useState } from "react";
import { Link } from "react-router";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../logo/fusion-gallery-logo.png";

export default function Nav(){

    const [portrait, setPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);
    const [show, setShow] = useState(false);
    const [showInner, setShowInner] = useState(false);
    
    window.matchMedia("(orientation: portrait)").addEventListener("change", event => {
        const portrait = event.matches;
        setPortrait(portrait)
    });
    
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const handleBack = () => setShowInner(false);

    const handleInnerOpen = () => setShowInner(true);

    const handleInnerClose = () => {
        setShowInner(false);
        setShow(false);
    };

    return (
        <div>
        <nav className="nav">
            <div>
                <div className="banner-wrapper">
                    <Link to="/">
                        <img
                            src={logo}
                            width={300}            
                            height={300}
                            className="banner"
                        />
                    </Link>
                </div>
            </div>
        <div className="menu-container">
            {!portrait ?
            <div className="menu-main">
                <ul className="menu-list">
                    <li className="menu-list-item">
                        <p className="menu-dropdown">artists</p>
                        <div className="menu-sub">
                            <ul className="menu-sub-list">
                                <li className="menu-list-item">
                                    <Link to="/artists/Geoff_Bailey" className="nav-link">
                                        <p className="menu-sub-item">Geoff Bailey</p>
                                    </Link>
                                </li>
                                <li className="menu-list-item">
                                    <Link to="/artists/Rachel_Rusted" className="nav-link">
                                        <p className="menu-sub-item">Rachel Rusted</p>
                                    </Link>
                                </li>
                                <li className="menu-list-item">
                                    <Link to="/artists/Shani_Danielsson" className="nav-link">
                                        <p className="menu-sub-item">Shani Danielsson</p>
                                    </Link>
                                </li>
                                <li className="menu-list-item">
                                    <Link to="/artists/Fern_Beasley_&_Evie_Beasley" className="nav-link">
                                        <p className="menu-sub-item">Fern Beasley & Evie Beasley</p>
                                    </Link>
                                </li>
                                <li className="menu-list-item">
                                    <Link to="/artists/Kirsty_Whitrow" className="nav-link">
                                        <p className="menu-sub-item">Kirsty Whitrow</p>
                                    </Link>
                                </li>
                                <li className="menu-list-item">
                                    <Link to="/artists/Rose_Allinson" className="nav-link">
                                        <p className="menu-sub-item">Rose Allinson</p>
                                    </Link>
                                </li>
                                <li className="menu-list-item">
                                    <Link to="/artists/Peter_Berry" className="nav-link">
                                        <p className="menu-sub-item">Peter Berry</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-list-item">
                        <Link to="/about" className="nav-link">
                            <p className="nav-item">about</p>
                        </Link>
                    </li>
                    <li className="menu-list-item" >
                        <Link to="/contact" className="nav-link">
                            <p className="nav-item">contact</p>
                        </Link>
                    </li>
                    <li className="menu-list-item">
                        <Link to="/news" className="nav-link">
                            <p className="nav-item">news</p>
                        </Link>
                    </li>
                </ul>
            </div>
            :
            <div className="menu-main">
                <GiHamburgerMenu onClick={handleOpen} className="nav-hamburger"/>          
            </div>
            }
            </div>
        <div>
            <div>
                <>
                    <Offcanvas show={show} placement={"end"} onHide={handleClose} >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div onClick={handleInnerOpen} className="canvas-navigate">
                                <p className="canvas-text" onClick={handleInnerOpen}>artists</p>
                            </div>
                            <Link to="/" onClick={handleClose} className="canvas-link">
                            <div className="canvas-button">
                                <p className="canvas-text">home</p>
                            </div>
                            </Link>
                            <Link to="/about" onClick={handleClose} className="canvas-link">
                            <div className="canvas-button">
                                <p className="canvas-text">about</p>
                            </div>
                            </Link>
                            <Link to="/contact" onClick={handleClose} className="canvas-link">
                            <div className="canvas-button">
                                <p className="canvas-text">contact</p>
                            </div>
                            </Link>
                            <Link to="/news" onClick={handleClose} className="canvas-link">
                            <div className="canvas-button">
                                <p className="canvas-text">news</p>
                            </div>
                            </Link>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
                <div>
                    <>
                        <Offcanvas show={showInner} placement={"end"} onHide={handleInnerClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div onClick={handleBack} className="canvas-navigate">
                                    <p onClick={handleBack} className="canvas-text">Back</p>
                                </div>
                                <Link to="/artists/Geoff_Bailey" onClick={handleInnerClose} className="canvas-link">
                                    <div className="canvas-button">
                                        <p className="canvas-text">Geoff Bailey</p>
                                    </div>
                                </Link>
                                <Link to="/artists/Rachel_Rusted" onClick={handleInnerClose} className="canvas-link">
                                    <div className="canvas-button">
                                        <p className="canvas-text">Rachel Rusted</p>
                                    </div>
                                </Link>
                                <Link to="/artists/Shani_Danielsson" onClick={handleInnerClose} className="canvas-link">
                                    <div className="canvas-button">
                                        <p className="canvas-text">Shani Danielsson</p>
                                    </div>
                                </Link>
                                <Link to="/artists/Fern_Beasley_&_Evie_Beasley" onClick={handleInnerClose} className="canvas-link">
                                    <div className="canvas-button">
                                        <p className="canvas-text">Fern Beasley & Evie Beasley</p>
                                    </div>
                                </Link>
                                <Link to="/artists/Kirsty_Whitrow" onClick={handleInnerClose} className="canvas-link">
                                    <div className="canvas-button">
                                        <p className="canvas-text">Kirsty Whitrow</p>
                                    </div>
                                </Link>
                                <Link to="/artists/Rose_Allinson" onClick={handleInnerClose} className="canvas-link">
                                    <div className="canvas-button">
                                        <p className="canvas-text">Rose Allinson</p>
                                    </div>
                                </Link>
                                <Link to="/artists/Peter_Berry" onClick={handleInnerClose} className="canvas-link">
                                    <div className="canvas-button">
                                        <p className="canvas-text">Peter Berry</p>
                                    </div>
                                </Link>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </>
                </div>
            </div>
        </div>
        </nav>
    </div>
    );
};