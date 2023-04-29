import { useEffect, useState } from "react";
import hotelsService from '../../services/hotels';
import { useParams, useNavigate } from 'react-router-dom';

 function HotelDetail() {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState();

  useEffect(() => {
    async function fetchHotel() {
      try {
        const hotel = await hotelsService.detail(hotelId);
        setHotel(hotel);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate('/hotels');
        }
      }
    }
    fetchHotel();
  }, [hotelId]);

  return (
    <>
      {!hotel? (<p><i className='fa fa-gear fa-spin'></i>Loading...</p>) : (
        <>
          <h1>{hotel.name}</h1>
          <h2> {hotel.rooms} </h2>
          <img src= {hotel.picture} alt="" />
          <h3> {hotel.description} </h3>
         
        </>
       
      )} 
    </>
  )
}

export default HotelDetail