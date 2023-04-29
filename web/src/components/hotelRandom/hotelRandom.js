import React, { useEffect, useState } from 'react';
import hotelsService from '../../services/hotels';
import HotelItem from '../hotelItem/hotelItem';



function HotelRandom() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    hotelsService.list()
      .then(hotels => setHotels(hotels))
      .catch(error => console.error(error))
  }, []);


  return (
    <>
      <div className='featured'>
        {hotels.map((hotel) =>
          <div className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={hotel.id}>
            <HotelItem hotel={hotel} />
          </div>
        )}
      </div>
    </>
  )
}


export default HotelRandom


