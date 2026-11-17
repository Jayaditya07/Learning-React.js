import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>Logo</h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/About">About</Link>
                </li>

                <li>
                    <Link to="/services">Service</Link>
                </li>
            </ul>
        </nav>
    );
}