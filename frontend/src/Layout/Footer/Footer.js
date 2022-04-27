import React from 'react';
import { FooterContainer, FooterLeft, FooterMain, FooterMiddle, FooterRight } from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
        
        <FooterLeft>
            <h6>Download our app</h6>
            <p>Download App for Android and</p> 
            <p>IOS Mobile Phone</p>   
            <img src="./assests/app-store.png" alt="App-Stores Button" />
        </FooterLeft>

        <FooterMain>
            <h3>localMart</h3>
            <p>High Quality is our First Priority</p>
            <p>Copyrights 2022 &copy; Team</p>
        </FooterMain>

        <FooterMiddle>
            <a href="https://wa.me/9372409041?text=I'm%20interested%20in%20becoming%20a%20seller%20on%20your%20website">Become a Seller</a>
            <p>Contact Us</p>
            <p>Privacy</p>
            <p>Help</p>v
        </FooterMiddle>

        <FooterRight>
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Youtube</a>
            <a href="https://www.youtube.com/">Facebook</a>
        </FooterRight>
    </FooterContainer>
  )
}

export default Footer