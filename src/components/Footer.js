import React from "react";
import "./Footer.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <p>
              <i class="fa fa-phone" />
              095378 58025
            </p>
            <p>
              <i class="fa fa-envelope" />
              Koseligsurat@gmail.com
            </p>
          </div>
          <div className='footer-link-items'>
            <h2>Location</h2>
            <i class='fa fa-map-marker' aria-hidden= 'true'/>
            <a >104 international business centre piplod,<br/> Surat, India, Gujarat</a>
          </div>
          <div className='footer-link-items'>
            <h2>Work Timings</h2>
            <ul className='time-list'>
            <li>
              MON-FRI 9:00AM-11:30PM
            </li>
            <li>
              SAT 11:00AM-11:30PM
              
            </li>
            <li>
            SUN 9:00AM-11:30PM
            </li>
            </ul>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/koseligsurat?ref=page_internal"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
              // onClick={openUrl('https://www.facebook.com/koseligsurat?ref=page_internal')}
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/koseligcoffee/?fbclid=IwAR3u9OrCjNBN5222-14CvE5FlPd84Dv8bI4SVD0rzhOKHjFdxoinZsEAGOo"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <i class="fab fa-instagram" />
            </a>

            <a
              class="social-icon-link twitter"
              href="https://twitter.com/koseligc?fbclid=IwAR1xlV1NuGnavuo-3Obr6P4fAHeJ_IioezSHa-2UZBSe361hHjLYA08EcoI"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <i class="fab fa-twitter" />
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
