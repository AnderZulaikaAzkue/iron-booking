import React, { useEffect, useState } from 'react';
import hotelsService from '../../services/hotels';
import { MDBCardTitle, MDBCardImage } from 'mdb-react-ui-kit';


function HotelRandom() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    hotelsService.list()
      .then(hotels => setHotels(hotels))
      .catch(error => console.error(error))
  }, []);


  return (
    <>
      <div id="flush-module" className="accordion-collapse collapse show">
        <div className="accordion-body">
          <div className="row g-2">
            {hotels.map((hotel) =>
              <div className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={hotel.id}><h1>{hotel.city}</h1>
                <div className="accordion-item">
                  <MDBCardImage position='top' src={hotel.picture} width={250} alt='...' />
                  <MDBCardTitle>{hotel.name}</MDBCardTitle>
                  <a href="/detail" className="btn btn-primary">Book a room</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}


export default HotelRandom


