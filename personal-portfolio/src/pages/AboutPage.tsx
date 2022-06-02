import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';

const AboutPage = () => (
    <>
        <div>
            <h1>About me</h1>
            <div>
                <p> I am a gentle and curious soul</p>
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

export default AboutPage;