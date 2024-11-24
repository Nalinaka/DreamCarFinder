import React, { useState } from "react";

const ContactForm = () => {
    const[isModalOpen, setIsModalOpen] = useState([false]);


const  toggleModal = () => {
  setIsModalOpen(!isModalOpen); //This shows Modal being visible 
};
return (
<section id="ContactForm">
<a href="#">
<button class="mail__btn click" onclick="toggleModal()">
  <i class="fa-regular fa-envelope"></i>
</button>
</a>
<a href="Find your cat" class="scroll">
<div class="scroll__icon click"></div>
</a>
<div class="modal">
<div class="modal__half modal__about">
  <h3 class="modal__title modal__title--about">
    Here's a bit about <b class="blue" onclick="toggleModal()"></b>
  </h3>
  <h4 class="modal__sub-title modal__sub-title--about">
    Best Car Directory
  </h4>
  <p class="modal__para">
    We're Passionate about <span class="text-blue">Cars.</span>
    <br />
    We have a huge fleet of cars, ready to be test driven 
    <span class="text-blue">by their new owners.</span> Contact us
    today to book in your test drive! 
    <br />
    <span class="text-blue">We're here to help</span> you make the right 
    choice. 
  </p>
  <div class="car__Images--container">
    <figure class="Car_Images">
      <img
        class="modal__car--img"
        src="./assets/"
        alt="car 1"
      />
      <span class="car__name">Car name</span>
    </figure>

    <figure class="Car_Images">
      <img
        class="modal__car--img"
        src="./"
        alt=""
      />
      <span class="car__name"></span>
    </figure>

    <figure class="Car_Images">
      <img
        class="modal__car--img"
        src="./"
        alt=""
      />
      <span class="car__name">Car</span>
    </figure>
  </div>
</div>

<div class="modal__half modal__contact">
  <i class="fas fa-times modal__exit click" onclick="toggleModal()"></i>
  <h3 class="modal__title modal__title--contact">Let's have a chat!</h3>
  <h3 class="modal__sub-title modal__sub-title--contact">
    Come visit and find your new car!
  </h3>
  <form id="contact__form" onsubmit="contact(event)">
    <div class="form__item">
      <label class="form__item--label"> Name</label>
      <input class="input" name="user_name" type="text" required />
    </div>
    <div class="form__item">
      <label class="form__item--label">Phone</label>
      <input class="input" name="user_phone" type="number" required />
    </div>
    <div class="form__item">
      <label class="form__item--label">Email</label>
      <input class="input" name="user_email" type="email" required />
    </div>
    <div class="form__item">
      <label class="form__item--label">Message</label>
      <textarea
        class="input"
        name="message"
        type="text"
        required
      ></textarea>
    </div>
    <button id="contact__submit" class="form__submit">Submit</button>
  </form>
  <div class="modal__overlay modal__overlay--loading">
    <i class="fas fa-spinner"></i>
  </div>
  <div class="modal__overlay modal__overlay--success">
    Thanks for your message. Soon, a message and car you shall have!
  </div>
</div>
</div>
</section>
)
}

export default ContactForm; 