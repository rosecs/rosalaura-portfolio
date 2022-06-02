import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <nav className="py-4 px-6 text-sm font-medium">
        <ul className="flex space-x-3">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/archive">Archive</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        <div className="space-x-3">
            <NavLink to="/"><img src={''} className="App-logo img-fluid" alt="logo" /></NavLink>
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                Resume
            </button>
            <NavLink to="/">Schedule a call</NavLink>
        </div>

    </nav>
);

export default Header;