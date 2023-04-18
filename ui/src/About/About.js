import React from 'react';
import aboutus from './aboutus.png';
import '../About/About.css';
import Nav from '../Navbar/Nav';

function About() {
  return (
    <>
    <Nav/>
    <div className='image-container'>

      <img src={aboutus} alt="aboutus" className='image-style' />
    </div>
    </>
  );
}

export default About;