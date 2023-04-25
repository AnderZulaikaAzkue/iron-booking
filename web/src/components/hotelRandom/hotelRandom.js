import React, { useEffect, useState } from 'react';
import hotelsService from '../../services/hotels';

function HotelRandom() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    hotelsService.list()
      .then(hotels => setHotels(hotels))
      .catch(error => console.error(error))
  }, []);

  return (
    <>
      {hotels.map((hotel) => 
      <div className=" card card-body col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"  key={hotel.city}>{hotel.city}
      <h3> {hotel.name} </h3>
      <img src={hotel.picture} alt="hotelimg" width={250} />
      <a href="/detail" class="btn btn-primary">Book a room</a>
      </div>
      )}
    </>
  )
}


export default HotelRandom


