import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="item">Home</Link>
                </li>
                <li>
                    <Link to="/About" className="item">About</Link>
                </li>
                <li>
                    <Link to="/People" className="item">People</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar