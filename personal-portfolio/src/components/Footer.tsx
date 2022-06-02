import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
    <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio">Archive</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>

        <NavLink to="/"><img src={''} className="App-logo img-fluid" alt="logo" /></NavLink>
        <button>
            Resume
        </button>

        <div>copyright 2022</div>
    </div>
);

export default Footer;