import React, { useEffect, useState } from 'react';
import hotelsService from '../../services/hotels';
import HotelItem from '../hotelItem/hotelItem';
import Footer from '../footer/footer';



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
          <div className="" key={hotel.id}>
            <HotelItem hotel={hotel} />
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}


export default HotelRandom


