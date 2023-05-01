import { Link } from 'react-router-dom'
import React from 'react'
import "./hotelByType.css";

function HotelByType({ id, types }) {

  return (
    <div className="">
      {
        types?.map(type => (
          <div className="" key={type.id}>
            <Link className='city-link' to={`/hotels/${id}`}  >
              <img
                src={type.picture}
                alt={type.name}
                className="featuredImg"
              />
              <div >
              </div>
            </Link>
            <div className="featuredTitles">
              <h2>{type.name}</h2>
              <h2>{type.city}</h2>
            </div>
          </div>
        ))
      }

    </div>
  );
};

export default HotelByType