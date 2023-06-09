 import hotelsService from '../../services/hotels';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HotelByCity from '../hotelByCity/hotelByCity';


function HotelsList() {
  const [search] = useSearchParams();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchHotels() {
      const query = {};
      const city = search.get('city');
      console.log(city)
      if (city) query.city = city;
      const type = search.get('type');
      if (type) query.type = type;
      console.log(type)
      const hotels = await hotelsService.list(query);
      setHotels(hotels);
      console.log(hotels)
    }
    fetchHotels();
  }, [search])

  return (
    <div>
      {
        hotels !== undefined ? (
        <HotelByCity cities={hotels} />
      ) : (< > </>)
    }
    </div>
  )
}

export default HotelsList