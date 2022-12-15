import  React from "react";
import "../assets/styles/footer.css";
import ig from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import wa from "../assets/images/whatsapp.png";
import telegram from "../assets/images/telegram.png";

const Footer = () => {
  return (
    <div className="text-center footer" id="contact">
      <h3>Let's Talk and Have a Nice Collaboration Together!</h3>
      <div className="contact-icon">
        <a href="https://www.instagram.com/novyna__" target="_blank">
          <img src={ig} alt="instagram" className="contact-footer-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/noviyana-ling12/" target="_blank">
          <img src={linkedin} alt="linkedin" className="contact-footer-icon"/>
          </a>
          <a href="https://wa.me/+628176898582" target="_blank">
          <img src={wa} alt="whatsapp" className="contact-footer-icon"/>
          </a>
          <a href="https://t.me/Noviyana12" target="_blank">
          <img src={telegram} alt="telegram" className="contact-footer-icon"/>
          </a>
      </div>
    </div>
  )
}

export default Footer;