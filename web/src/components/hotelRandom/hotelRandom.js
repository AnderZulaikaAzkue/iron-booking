import React, { useEffect, useState } from 'react';
import hotelsService from '../../services/hotels';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBRow,
  MDBCol} from 'mdb-react-ui-kit';


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
      <div key={hotel.id}><h1>{hotel.city}</h1>
      <MDBRow className='row-cols-2 row-cols-md-4 g-6'>
      <MDBCol>
      <MDBCard className='mb-3'>
      <MDBCardImage position='top' src= {hotel.picture} width={250}  alt='...' />
      <MDBCardBody>
      <MDBCardTitle>{hotel.name}</MDBCardTitle>
      <a href="/detail" className="btn btn-primary">Book a room</a>
      </MDBCardBody>
      </MDBCard>
      </MDBCol>
    </MDBRow>
      </div>
      )}
     
    </>
  )
}


export default HotelRandom


