//import "./hotelByCity.css";
import { Link } from 'react-router-dom'
const HotelByCity = ({cities}) => {

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
        ))
       }
    
    </div>
  );
};

export default HotelByCity;