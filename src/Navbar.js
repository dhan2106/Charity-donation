import React from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
    return (
        <>
            {/* Floating Background Doodles */}
            <div className="doodle-container">
                <div className="doodle">✨</div>
                <div className="doodle">🎨</div>
                <div className="doodle">💫</div>
                <div className="doodle">🌟</div>
                <div className="doodle">🌀</div>
            </div>

            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">
                    <h2> CHARITY DONATION </h2>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
