import { useEffect, useState } from "react";
import "./hotelByCity.css";
import { Link } from 'react-router-dom'
import hotelsService from '../../services/hotels';

const HotelByCity2 = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function listCities() {
      try {
        const cities = await hotelsService.list()
        const newCities = []
        const cityNames = []
        for (let city of cities) {
          if (!cityNames.includes(city.city)) {
            cityNames.push(
              city.city
            )
            newCities.push({
              id: city.id,
              name: city.name,
              city: city.city,
              picture: city.picture
            })
          }
        }
        setHotels(newCities)

      } catch (errors) {
        console.error(errors)
      }
    }
    listCities()
  }, []);

  return (
    <div className="featured">
      {
        hotels !== undefined && hotels?.map(hotel => (
          <div className="featuredItem" key={hotel.id}>
            <Link className='city-link' to={`/places/?city=${hotel.city}`} >
              <img
                src={hotel.picture.length ? hotel.picture[0] : "https://pix8.agoda.net/hotelImages/283/283888/283888_110815185030576.jpg?ca=0&ce=1&s=1024x768"}
                alt={hotel.name}
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h2>{hotel.city}</h2>
                
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default HotelByCity2;