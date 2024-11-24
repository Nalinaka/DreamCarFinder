import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  return (
    <footer>
      <div class="footer__container">
        <div class="row footer__row">
          <a
            href="#"
            onclick="toggleModal()"
            class=""
            className="footer__list--link1 link__hover-effect link__hover-effect-white"
          >
            Contact Us
          </a>
          <a
            href="./findyourcar.html"
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

export default Footer;
