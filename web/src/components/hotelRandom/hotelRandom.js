import React, { useEffect, useState } from 'react';
import hotelsService from '../../services/hotels';
import HotelItem from '../hotelItem/hotelItem';
import Footer from '../footer/footer';



function HotelRandom({ search, hotels }) {

  return (
    <>
      <div className='featured'>
        {hotels.filter(hotel => search === undefined || hotel.city.toLowerCase().includes(search.toLowerCase())).map((hotel) =>
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


