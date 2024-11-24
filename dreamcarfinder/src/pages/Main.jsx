import React, { useState, useEffect} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Main = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);


  const axiosInstance = axios.create({
 baseURL: "https://freetestapi.com/api/v1/cars", // Required for cookies, authorization headers
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  async function getCars() {
    try {
      const { data } = await axiosInstance.get("https://freetestapi.com/api/v1/cars");
      setCars(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <main>
      <section id="car__info">
        <div className="car-list">
          {cars.length > 0 ? (
            cars.map((car) => (
              <div key={car.id} className="car-data">
                <h3>{car.name}</h3>
                <p><b>Year:</b> {car.year}</p>
                <p><b>Price:</b> ${car.price}</p>
                <p><b>Color:</b> {car.color}</p>
                <p className="description"><b>Description:</b> {car.description}</p>
                <p className="car__model"><b>Model:</b> {car.model}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;


// const Main = () => {
//     const[Price, setPrice] = useState([]);
//     // const navigate = useNavigate();
// const onSearchCar = (event) => {
//       console.log(event.target.value);
//       // Add logic for searching/filtering cars here
//     };
    

// async function getPrice() {
//     const { data } = await axios.get (
//         "https://freetestapi.com/api/v1/cars"
//     );
//     setPrice(data);
// }

// useEffect (() => {
//     getPrice();
// }, []);
// return (
// <main>
//       <section id="content">
//         <search id="searchInput">
//           <div className="search__container">
//             <form id="car__form">
//                <a href="./index.html">
//                 <input
//                   class="findyourcar__input"
//                   type="text"
//                   id="search-input"
//                   placeholder="Search by Model"
//                   onchange={(e) => onSearchCar(e)}
//                   />
//                 <button className="submit__search" id="search-btn" type="button">
//                   <i class="fa-solid fa-magnifying-glass"></i>
//                 </button>
//                </a> 
//             </form>
//           </div>
//         </search>
//       </section>

//       <section id="sort">
//         <div class="sort__container">
//           <form id="sort__form">
//             <a href="./index.html">
//             </a>
//             <select id="sort-selector">
//               <option value="Name">Name, Alphabetically</option>
//               <option value="sort-high-low">Sort by High to Low</option>
//               <option value="sort-low-high">Sort by Low to High</option>
//             </select>
//           </form>
//         </div>
//       </section>

//       <section id="car__info">
//         <div class="car-list">
//           <div class="car-data">
//             <h3>Car Name</h3>
//             <p><b>Year: </b></p>
//             <p><b>Price:</b></p>
//             <p><b>Color:</b></p>
//             <p class="description"><b>Description:</b></p>
//             <p class="car__model"><b>Car Model:</b></p>
//             <a href="./findyourcar.html">
//               <button>View More</button>
//               <select
//                 onchange="showCarImage(value)"
//                 name="car_selector"
//                 id="car_select"
//               ></select>
//             </a>
//           </div>
//         </div>
//       </section>

//       <section id="Car_Information">
//         <div class="container__carlogo">
//           <figure class="carlogo">
//             <img
//               id="car-logo"
//               src="./assets/Dark Blue Minimalist Car Rental Deals Instagram Post.png"
//               alt="logo"
//             />
//           </figure>
//         </div>
//       </section>
//      </main>
//      )
//     }

//     export default Main; 