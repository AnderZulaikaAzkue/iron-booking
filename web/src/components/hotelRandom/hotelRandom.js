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
      <h1>hotelList</h1>
      {hotels.map((hotel) => <div key={hotel.address}>{hotel.address}</div>)}

    </>
  )
}

export default HotelRandom