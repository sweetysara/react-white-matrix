// src/components/styles.js
import styled from 'styled-components';

export const StyledHeader = styled.header`
  
 & {
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
 }


  &.sticky {
    padding: 5px 100px;
    background: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  & .logo {
    position: relative;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.6s;
  }

  .toggle {
    display: none;
  }
  

  @media (max-width: 992px) {
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
        top: 4px;
        width: 100%;
        height: 2px;
        background: #000;
        z-index: 1;
        box-shadow: 0 10px 0 #000;
        transition: 0.5s;
      }
    
      .toggle::after {
        content: '';
        position: absolute;
        bottom: 4px;
        width: 100%;
        height: 2px;
        background: #000;
        z-index: 1;
        transition: 0.5s;
    
      }

      
    &.sticky,
    & {
        padding: 5px 50px;
        background: #fff;
    }
  


    & ul {
        position: absolute;
        top: 59px;
        left: 0;
        width: 100%;
        height: 100wh;
        text-align: center;
        overflow: auto;
        background: #fff;
        visibility: hidden;
        opacity: 0;
    }
  
    &.active ul {
        position: absolute;
        visibility: visible;
        opacity: 1;
        display: block;
        padding-top: 20px;
    }
  
    &.active ul li a {
      display: inline-block;
      margin: 10px 0;
      font-size: 20px;
      color: #000000
    }
  
    & .logo,
    & ul li a {
      color: #000;
    }
  }
  

  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul li {
    position: relative;
    list-style: none;
  }

  ul li a {
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 300;
    transition: 0.6s;
  }

  &.sticky .logo,
  &.sticky ul li a {
    color: #000;
  }
`;


export const StyledBanner = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(./assets/blurry.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #efefe4;
    font-size: 90px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1em;

    span {
      color: #000000;
    }
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 60px; 
    }
    background-position: center;
  }
`;

export const StyledAboutSection = styled.section`
  background: url(assets/sand_dune.jpg);
  background-size: cover;
  padding: 100px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    text-align: center;
    width: 100%;
  }

  .mxw800p {
    max-width: 800px;
    margin: 0 auto;
  }

  h3 {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #ffffff;
  }




  p {
    position: relative;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #000000;
  }

  .about_para {
    color: #ffffff;
  }

  .btn {
    position: relative;
    display: inline-block;
    padding: 10px 30px;
    background: #000;
    text-decoration: none;
    color: #ffffff;
    border-radius: 50px;
  }
`;

export const StyledServiceSection = styled.section`
  background-image: url('assets/cosmos.jpg');
  background-size: cover;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    text-align: center;
    width: 100%;
  }

  .mxw800p {
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 992px) {
    padding: 100px 50px 50px 50px;

    .content .services .box {
        width: 100%;
    }
}

  h3 {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #ffffff;
  }

  p {
    position: relative;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #000000;
  }

  .section_para {
    color: #ffffff;
  }

  .services {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    max-width: 100%;
    margin-top: 40px;
  }

  .services .box {
    width: 300px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  }

  .services .box .iconBx {
    margin-top: 25px;
  }

  .services .box .iconBx img {
    max-width: 70px;
    margin-bottom: 15px;
  }

  .services .box h2 {
    font-size: 18px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const StyledContactSection = styled.section`
  background: #000;

  .content {
    position: relative;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }


  h3 {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #ffffff;
  }

  @media (max-width: 992px) {

    h3{
        font-size: 36px
    }
    .content .services .box {
        width: 100%;
    }
}

  p {
    position: relative;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #ffffff;
  }

  .contactForm {
    position: relative;
    display: flex;
    flex-direction: column;

    form {
      width: 100%;
    }

    .row100 {
      display: flex;
      width: 100%;
    }

    .row100 .inputBx50 {
      width: 50%;
      margin: 0 20px;
    }

    .row100 .inputBx100 {
      width: 100%;
      margin: 0 20px;
    }

    .row100 input,
    .row100 textarea {
      position: relative;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      background: transparent;
      width: 100%;
      padding: 10px 0;
      outline: none;
      font-size: 18px;
      font-weight: 300;
      margin: 20px 0;
      resize: none;
    }

    .row100 textarea {
      height: 100px;
    }

    .row100 input::placeholder,
    .row100 textarea::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    .row100 input[type="submit"] {
      background: #fff;
      color: #000;
      max-width: 100px;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
      font-weight: 500;
    }
  }

  .sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;

    ul {
      display: flex;
    }

    ul li {
      list-style: none;
    }

    ul li a {
      text-decoration: none;
      display: inline-block;
      margin: 0 30px;

      img {
        filter: invert(1);
        max-width: 40px;
      }

      &:hover img {
        opacity: 0.5;
      }
    }
  }
`;
