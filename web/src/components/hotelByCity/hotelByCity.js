import "./hotelByCity.css";
import { Link } from 'react-router-dom'

function HotelByCity({ id, cities, }) {

  return (
    <div className="featured">
      {
        cities?.map(city => (
          <div className="featuredItem" key={city.id}>
            <Link className='city-link' to={`/hotels/${id}`}   >
              <img
                src={city.picture}
                alt={city.name}
                className="featuredImg"
              />
              <div >
              </div>
            </Link>
            <div className="featuredTitles">
              <h2>{city.name}</h2>
              <h2>{city.city}</h2>
            </div>
          </div>
        ))
      }

    </div>
  );
};

export default HotelByCity;