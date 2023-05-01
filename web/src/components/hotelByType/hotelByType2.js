import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import hotelsService from '../../services/hotels';
import "./hotelByType.css";

function HotelByType2() {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function listTypes() {
      try {
        const types = await hotelsService.list()
        const newTypes = []
        const placeTypes = []
        for (let type of types) {
          if (!placeTypes.includes(type.type)) {
            placeTypes.push(
              type.type
            )
            newTypes.push({
              id: type.id,
              name: type.name,
              type: type.type,
              picture: type.picture
            })
          }
        }
        setHotels(newTypes)

      } catch (errors) {
        console.error(errors)
      }
    }
    listTypes()
  }, []);

  return (
    
    <div className="featured">
      {
        hotels !== undefined && hotels?.map(hotel => (
          <div className="featuredItem" key={hotel.id}>
            <Link className='type-link' to={`/places/?type=${hotel.type}`} >
              <img
                src={hotel.picture.length ? hotel.picture[0] : "https://pix8.agoda.net/hotelImages/283/283888/283888_110815185030576.jpg?ca=0&ce=1&s=1024x768"}
                alt={hotel.name}
                className="featuredImg"
              />
            </Link>
            <div className="featuredTitles">
              <h2>{hotel.type}</h2>
            </div>
          </div>
        ))
      }
    </div>
  );
};
export default HotelByType2