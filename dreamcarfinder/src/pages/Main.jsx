import React, { useState, useEffect} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Main = () => {
    const[Price, setPrice] = useState([]);
    // const navigate = useNavigate();


async function getPrice() {
    const { data } = await axios.get (
        "https://freetestapi.com/api/v1/cars"
    );
    setPrice(data);
}

useEffect (() => {
    getPrice();
}, []);
return (
<body>
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
              <option value="sort-high-low">Sort by High to Low</option>
              <option value="sort-low-high">Sort by Low to High</option>
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
     </body>
     )
    }

    export default Main; 