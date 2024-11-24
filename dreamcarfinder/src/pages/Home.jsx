import React, { useState, useEffect} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Home = () => {
    const[users, setUsers] = useState([]);
    // const navigate = useNavigate();


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
        </ul>
      </nav>
      <h1>California's Best Car Directory</h1>
      <h2>Find your new car now</h2>
    </section>
    </section>
)
};

export default Home;