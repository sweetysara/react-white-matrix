// src/components/MyComponent.jsx
import React, { useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import necessary icons
import { useNavigate } from 'react-router-dom';

import {
  StyledHeader,
  StyledBanner,
  StyledAboutSection,
  StyledServiceSection,
  StyledContactSection,
} from './styles';

const MyComponent = () => {
  const headerRef = useRef(null);

  const toggle = () => {
    const header = headerRef.current;
    if (header) {
      header.classList.toggle('active');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navigate= useNavigate()

  return (
    <>
      <StyledHeader ref={headerRef}>
        {/* Header Content */}
        <a href="#" className="logo">
          X.AI
        </a>
        <ul>
          <li>
            <a href="#home" onClick={toggle}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggle}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggle}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggle}>
              Contact
            </a>
          </li>
        </ul>
        <div className="toggle" onClick={toggle}></div>
      </StyledHeader>

            <StyledBanner id='home'>
                {/* Banner Content */}
                <h2>
                    We Make<span> Brands</span> Matter
                </h2>
            </StyledBanner>

            <StyledAboutSection id='about'>
                {/* About Section Content */}
                <div className="content">
                    <div className="mxw800p">
                        <h3>Who We Are</h3>
                        <p className="about_para">
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                        <button onClick={() => navigate("/Login")} className="btn" >
                          Get Started
                        </button>
                    </div>
                </div>
            </StyledAboutSection>

            <StyledServiceSection id='services' className='sec'>
                {/* Service Section Content */}
                <div className="content">
                    <div className="mxw800p">
                        <h3>What We Do</h3>
                        <p className="section_para">
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>
                    </div>
                    <div className="services">
                        {/* Box1 */}
                        <div className="box">
                            <div className="iconBx">
                                <img src="assets/icon1.png" alt="Design Icon" />
                            </div>
                            <div className="content">
                                <h2>Design</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </p>
                            </div>
                        </div>
                        {/* Box2 */}
                        <div className="box">
                            <div className="iconBx">
                                <img src="assets/icon2.png" alt="Development Icon" />
                            </div>
                            <div className="content">
                                <h2>Development</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </p>
                            </div>
                        </div>
                        {/* Box3 */}
                        <div className="box">
                            <div className="iconBx">
                                <img src="assets/icon3.png" alt="Branding Icon" />
                            </div>
                            <div className="content">
                                <h2>Branding</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledServiceSection>


            <StyledContactSection id='contact'>
                {/* Contact Section Content */}
                <div className="content">
                <div className="mxw800p">
                <h3>Contact Us</h3>
                <div className="contact-info">
                    <FaEnvelope className="icon" /> {/* Use the icon component */}
                    <h4 className="text">123xbee123@gmail.com</h4>
                    </div>
                    <div className="contact-info">
                    <FaPhone className="icon" /> {/* Use the icon component */}
                    <h4 className="text">+91 99227 76544</h4>
                </div>
                </div>
                    <div className="contactForm">
                        
                    </div>
                    <div className="sci">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="assets/facebook.png" alt="Facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/twitter.png" alt="Twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/linkedin.png" alt="LinkedIn" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </StyledContactSection>
        </>
    );
};

export default MyComponent;
