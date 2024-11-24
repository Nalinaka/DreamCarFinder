import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import  axios from "axios";


const Cars = () => {
    const { Model } = useParams();
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchModel, setSearchModel] = useState(Model);

    function onSearch() {
        fetchCars(searchModel);
    }


    async function fetchCars(carModel) {
        setLoading(true);
        const { data } = await axios.get(
          ("/api/v1/cars")
        );
        setCars(data);
        setLoading(false);
    }

    function onSearchKeyPress(key) {
        if (key === 'Enter') {
            onSearch()
        }
    }
    
    // const fetchCars = useCallback(() => {
    //   // try {
    //   //   const response = await axios.get('https://freetestapi.com/api/v1/cars');  // Fetch car data
    //   //   setCars(response.data);  // Updates with fetched data
    //   // } catch (err) {
    //   //   console.error('Error fetching cars:', err);
    //   //   setError('Failed to fetch car data');  // Handles errors
    //   // }
    // }, []);

      useEffect(() => {
        fetchCars();
      }, [fetchCars]);
    
      return (
        <>
          <div className="car__search">
            <Link to="/">
            <button>← Back</button>
            </Link>
            <div className="car__search--container">
              <label className="car__search--label">Search by carModel</label>
              <input type="number" value={searchModel} onChange={(event) => setSearchModel(event.target.value)} />
              onKeyPress={(event) => onSearchKeyPress(event.key)}
        {/* At top tech companies you will see code written like this:   */}
        {/* onKeyPress={(event) => event.key === 'Enter' && onSearch()}  */}
    
              <button onClick={() => onSearch()}>Enter</button>
            </div>
          </div>
          {loading
            ? new Array(10).fill(0).map((_, index) => (
                <div className="car" key={index}>
                  <div className="car__title">
                    <div className="car__title--skeleton"></div>
                  </div>
                  <div className="car__body">
                    <p className="car__body--skeleton"></p>
                  </div>
                </div>
              ))
            : cars.map(car => (
                <div className="car" key={car.model}>
                  <div className="car__title">{car.title}</div>
                  <p className="car__body">{car.body}</p>
                </div>
              ))}
        </>
      );
    };

    export default Cars;