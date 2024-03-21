// styles.js
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 40px 100px;
  z-index: 1000;

  &.sticky {
    padding: 5px 100px;
    background: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .logo {
    position: relative;
    font-weight: 700;
    color: #83242d;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.6s;

    &:hover {
      transform: scale(1.2);
    }
  }

  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      position: relative;
      list-style: none;

      a {
        position: relative;
        margin: 0 15px;
        text-decoration: none;
        color: #83242d;
        letter-spacing: 2px;
        font-weight: 600;

        &:hover {
          border-bottom: 2px solid #83242d;
          color: #000;
        }
      }
    }
  }


  .toggle {
    display: none;
  }

  
  @media (max-width: 992px) {
    /* Toggle button styles */
    .toggle {
      display: block;
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  
    .toggle::before {
      content: '';
      position: absolute;
      top: 6px;
      width: 100%;
      height: 4px;
      background: #83242d;
      z-index: 1;
      box-shadow: 0 10px 0 #83242d;
      transition: 0.5s;
      border-radius: 2px; /* Add rounded edges */
    }
  
    .toggle::after {
      content: '';
      position: absolute;
      bottom: 1px;
      width: 100%;
      height: 4px;
      background: #83242d;
      z-index: 1;
      transition: 0.5s;
      border-radius: 2px; /* Add rounded edges */
    }
  
    &,
    &.sticky{
      padding: 5px 50px;
      background: #fff;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }


  
    ul {
      position: absolute;
      top: 59px;
      left: 0;
      width: 100%;
      text-align: center;
      height: 0;
      overflow: hidden;
      background: #fff;
      visibility: hidden;
      opacity: 0;
      transition: max-height 0.5s ease, visibility 0.5s ease, opacity 0.5s ease;
    }
  
    &.active ul{
      height: auto;
      visibility: visible;
      opacity: 1;
      display: block;
      padding-top: 20px;
      max-height: 500px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
  
    &.active ul li a {
      display: inline-block;
      margin: 10px 0;
      font-size: 20px;
      color: #83242d;
    }
  

    &.active ul li a:hover {
      border-bottom: 2px solid #83242d;
      color: #000;
    }


    .sticky .logo,
    .sticky ul li a {
      color: #83242d;
    }
  }  

  @media (max-width: 576px) {
    & {
      padding: 20px;
    }
  }
`;


export const StyledBanner = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  h2 {
    color: #000;
    font-size: 90px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1em;

    span {
      color: #83242d;
    }
  }


  @media (max-width: 992px) {
    h2 {
      font-size: 60px;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 30px;
      padding: 0 50px;
    }
  }

`;

export const StyledAboutSection = styled.section`
  background: transparent;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 80px 0;
  align-items: center;
  position: relative;
  z-index: 2;

  .content {
    text-align: center;
  }

  .mxw800p {
    max-width: 800px;
    margin: 0 auto;
  }

  .h3_about {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #83242d;
  }

  .about-box {
    background-color: #ccc; 
    padding: 30px; 
    border-radius: 50px; 

  .about_para {
    font-size: 18px;
    line-height: 1.6;
    color: #444;
    padding-bottom: 25px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background: #83242d;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6d1d26;
    }
  }


  @media (max-width: 992px) {
    .about-box{
      border-radius: 20px; /* Adjust border radius */
      padding: 20px; /* Adjust padding */
    }

    .h3_about {
      font-size: 30px;
    }
  }

  @media (max-width: 576px) {
    .h3_about {
      font-size: 24px;
    }
  }
`;

export const StyledServiceSection = styled.section`
  background: transparent;
  min-height: 100vh;
  padding: 180px 0;

  .content {
    text-align: center;
  }

  .mxw800p {
    max-width: 800px;
    margin: 0 auto;
  }

  .h3_services {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 40px;
    color: #83242d;
  }

  .service-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .service-box {
    background-color: #ccc; 
    padding: 30px; 
    border-radius: 50px; 
  }

  .service-card {
    flex: 0 0 calc(50% - 20px);
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 30px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h4 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #83242d;
    }

    p {
      font-size: 18px;
      color: #444;
    }
  }


  @media (max-width: 992px) {
    .service-box{
      border-radius: 20px; /* Adjust border radius */
      padding: 20px; /* Adjust padding */
    }

    .h3_services {
      font-size: 30px;
    }

    .service-card{
      padding: 20px; 
    }
  }


  @media (max-width: 576px) {
    .service-box,
    .contact .mxw800p {
      border-radius: 10px; /* Adjust border radius */
      padding: 15px; /* Adjust padding */
    }

    .h3_services {
      font-size: 24px;
    }

    .service-card{
      padding: 15px; 
    }
  }


`;

export const StyledContactSection = styled.section`
  background: transparent;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  .content {
    position: relative;
    text-align: center;
    width: 100%;
  }

  .mxw800p {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 50px;
    background-color: #ccc;
    padding: 20px;
  }

  .h3_contact {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #83242d;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .contact-box {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h4 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #83242d;
    }

    p {
      font-size: 18px;
      line-height: 1.6;
      color: #444;
    }

    &:hover {
      transform: translateY(-5px);
      transition: transform 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 992px) {
    .content .mxw800p {
      border-radius: 20px; 
      padding: 20px; 
    }

    .h3_contact {
      font-size: 30px;
    }

    .contact-box{
      margin-bottom: 20px;
      padding: 20px; 
    }
  }

  @media (max-width: 576px) {
    .content .mxw800p {
      border-radius: 10px; 
      padding: 15px; 
    }

    .h3_contact {
      font-size: 24px;
    }

    .contact-box {
      padding: 15px;
    }
  }


`;
