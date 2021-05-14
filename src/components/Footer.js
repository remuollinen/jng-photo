import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <p className="copy">&copy; 2021 Joel N'Gawé</p>
      <div className="socials">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <AiOutlineInstagram id="ig-icon" className="social-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <AiOutlineFacebook id="fb-icon" className="social-icon" />
        </a>
        <a href="mailto:example@example.com">
          <AiOutlineMail id="email-icon" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
