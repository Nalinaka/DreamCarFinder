import { useEffect } from "react";
import React, { useState, useEffect} from "react";
import { axios } from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const[users, setUsers] = useState([]);
    const navigate = useNavigate();
}


async function getUsers() {
    const { data } = await axios.get (
        "https://freetestapi.com/api/v1/cars"
    );
    setUsers(data);
}

useEffect (() => {
    getUsers();
}, []);
return (
    <section id="navbar">
    <section id="landing-page">
      <nav>
        <figure>
          <li class="nav__link" onclick="toggleModal()">
            <img
              id="car-logo"
              src="./"
              alt="logo"
            />
          </li>
        </figure>

        <ul class="nav__link--list">
          <li class="nav__link">
            <a
              href="./index.html"
              class="nav__link--anchor link__hover-effect link__hover-effect--blue"
            >
              <button>Home</button>
            </a>
          </li>
          <li class="nav__link">
            <a
              href="./findyourcar.html"
              class="nav__link--anchor link__hover-effect link__hover-effect--blue"
            >
              <button>Find your Car</button>
            </a>
          </li>
          <li class="nav__link" onclick="toggleModal()">
            <a
              href="#"
              class="nav__link--anchor link__hover-effect link__hover-effect--blue"
            >
              <button>Contact</button>
            </a>
          </li>
          <li class="nav__link click" onclick="toggleContrast()">
            <a
              href="#"
              class="nav__link--anchor link__hover-effect link__hover-effect--black"
              ><i class="fa-solid fa-circle-half-stroke"></i>
            </a>
          </li>
        </ul>
      </nav>
      <h1>California's Best Car Directory</h1>
      <h2>Find your new car now</h2>
    </section>

    <body>
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

      <section id="content">
        <search id="searchInput">
          <div class="search__container">
            <form id="car__form">
               <a href="./index.html">
                <input
                  class="findyourcar__input"
                  type="text"
                  id="search-input"
                  placeholder="Search by Breed"
                  onchange="onSearchCat(event)"
                  />
                <button class="submit__search" id="search-btn" type="button">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
               </a> 
            </form>
          </div>
        </search>
      </section>

      <section id="sort">
        <div class="sort__container">
          <form id="sort__form">
            <a href="./index.html">
            </a>
            <select id="sort-selector">
              <option value="Name">Name, Alphabetically</option>
              <option value="sort-high-low">Sort by <Price>High to Low</Price></option>
              <option value="sort-low-high">Sort by <Price>Low to High</Price></option>
            </select>
          </form>
        </div>
      </section>

      <section id="car__info">
        <div class="car-list">
          <div class="car-data">
            <h3>Car Name</h3>
            <p><b>Year: </b></p>
            <p><b>Price:</b></p>
            <p><b>Color:</b></p>
            <p class="description"><b>Description:</b></p>
            <p class="car__model"><b>Car Model:</b></p>
            <a href="./findyourcar.html">
              <button>View More</button>
              <select
                onchange="showCarImage(value)"
                name="car_selector"
                id="car_select"
              ></select>
            </a>
          </div>
        </div>
      </section>

      <section id="Car_Information">
        <div class="container__carlogo">
          <figure class="carlogo">
            <img
              id=""
              src="./"
              alt="logo"
            />
          </figure>
        </div>
      </section>

      <footer>
        <div class="footer__container">
          <div class="row footer__row">
            <a
              href="#"
              onclick="toggleModal()"
              class=""
              class="footer__list--link1 link__hover-effect link__hover-effect-white"
            >
              Contact Us
            </a>
            <a
              href="./findyourcar.html"
              class="button-class"
              class="footer__class--link2 link__hover-effect link__hover-effect-white"
              >More Car Info
            </a>
            <div class="footer__copyright">Copyright © 2024 Nalini Krishan</div>
          </div>
        </div>
      </footer>
    </body>
  </section>
)

export default Home;