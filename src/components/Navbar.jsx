import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".navbar") && menuOpen) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Portfolio</Link>
            </div>

            {/* Hamburger Menu */}
            <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navbar Links */}
            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Me</Link>
            </div>
        </nav>
    );
};

export default Navbar;