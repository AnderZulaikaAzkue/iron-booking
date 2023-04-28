import React, { useEffect, useState } from 'react';
import hotelsService from '../../services/hotels';
import { MDBCardTitle, MDBCardImage } from 'mdb-react-ui-kit';


function HotelRandom({id}) {
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
                <div className="">
                  <img className="featuredImg" src={hotel.picture} width={250} alt='...' />
                  <h1>{hotel.name}</h1> 
                  <a href={`/hotels/${id}`}  className="btn btn-primary">Book a room</a>
                </div>
              </div>
            )}
          </div>
       
    </>
  )
}


export default HotelRandom


