import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';

const Hero = () => (
    <>
        <div>
            <div></div>
            <h3>Hello! It's me</h3>
            <h1> Rosa Laura </h1>
            <h1>Carrillo Soledad</h1>
            <div>
                <p> I am a </p>
            </div>
            <div>
                <p>scroll down</p>
                <FaArrowDown />
            </div>
            <div>
                <FaGithub />
                <FaInstagram />
                <FaLinkedin />
            </div>
            <div>
                <p>rosalauracs@gmail.com</p>
            </div>
        </div>
    </>
);

export default Hero;