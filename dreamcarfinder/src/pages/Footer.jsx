import React, { useState } from "react";

const Footer = () => {

const ContactForm = () => {
const[isModalOpen, setIsModalOpen] = useState([false]);

const  toggleModal = () => {
    setIsModalOpen(!isModalOpen); //This shows Modal being visible 
  };

  return (
    <footer>
      <div class="footer__container">
        <div class="row footer__row">
          <a
            href="#"
            onclick={toggleModal}
            class=""
            className="footer__list--link1 link__hover-effect link__hover-effect-white"
          >
            Contact Us
          </a>
          <a
            href="/cars"
            class="button-class"
            className="footer__class--link2 link__hover-effect link__hover-effect-white"
          >
            More Car Info
          </a>
          <div class="footer__copyright">Copyright © 2024 Nalini Krishan</div>
        </div>
      </div>
    </footer>
  );
};
};

export default Footer;
