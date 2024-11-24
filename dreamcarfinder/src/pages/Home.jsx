import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Main from "./Main";
import Cars from "./Cars";
import Footer from "./Footer";

// import { useNavigate } from "react-router-dom";
    // const navigate = useNavigate();

const Home = () => {
    const[users, setUsers] = useState([]);

async function getUsers() {
  try {
    const { data } = await axios.get (
        "https://freetestapi.com/api/v1/cars");
        console.log(data);
    setUsers(data);
} catch (error) {
  console.error("Error fetching data:", error);
}
}

useEffect (() => {
    getUsers();
}, []);
return (
    <section id="navbar">
    <section id="landing-page">
      <nav>
        <figure>
          <li className="nav__link" onclick="toggleModal()">
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
              href="./pages/cars.jsx"
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
              <Link to="./main.jsx"><button>Find your Car</button></Link>
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
        </ul>
      </nav>
      <h1>California's Best Car Directory</h1>
      <h2>Find your new car now!</h2>
    </section>
    <Main/>
    <Cars/>
    <Footer/>
    </section>
   
)
};

export default Home;