import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Main from "./Main";
import Cars from "./Cars";
import ContactForm from "./ContactForm";


const Home = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); 
  };

  async function getUsers() {
    try {
      const { data } = await axios.get("/api/v1/cars");
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <section id="navbar">
      <section id="landing-page">
        <nav>
          <figure>
            <li className="nav__link" button onlick="toggleModal()">
              <img
                id="car-logo"
                src="./assets/Dark Blue Minimalist Car Rental Deals Instagram Post.png"
                alt="logo"
              />
            </li>
          </figure>

          <ul class="nav__link--list">
            <li class="nav__link">
              <a
                href="/"
                class="nav__link--anchor link__hover-effect link__hover-effect--blue"
              >
                <button>Home</button>
              </a>
            </li>
            <li class="nav__link">
              <a
                href="./pages/Cars.jsx"
                class="nav__link--anchor link__hover-effect link__hover-effect--blue"
              >
                <Link to="/cars">
                  <button>Find your Car</button>
                </Link>
              </a>
            </li>
            <li className="nav__link"> <button onClick={toggleModal}>
              Contact</button>
            </li>
          </ul>
        </nav>
        <h1>California's Best Car Directory</h1>
        <h2>Find your new car now!</h2>
      </section>
      <Cars />
      <Main />
      <ContactForm/>
    </section>
  );
};

export default Home;
