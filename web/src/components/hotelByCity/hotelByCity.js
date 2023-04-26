//import "./hotelByCity.css";
import { Link } from 'react-router-dom'
import hotelsService from '../../services/hotels';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const HotelByCity = ({cities}) => {

  const [search] = useSearchParams();
  const [hotels, setHotels] = useState([]);


  /*useEffect(() => {
    async function fetchHotels() {
      const query = {}
      const city = search.get('city');
      if (city) query.city = city;

      const hotels = await hotelsService.list(query)
      setHotels(hotels)
    }
    fetchHotels();
  }, [search])*/

  return (
    <div className="featured">
      {
       cities?.map(city => (
          <div key= {city.id}  className="featuredItem">
        <Link  to="/" >
          <img
            src={city.image}
            alt={city.name}
            className="featuredImg"
          />
          <div >
            <h2>{city.name}</h2>
            <h3>5 properties</h3>
          </div>
        </Link>
      </div>
        ) )
       }
    
    </div>
  );
};

export default HotelByCity;