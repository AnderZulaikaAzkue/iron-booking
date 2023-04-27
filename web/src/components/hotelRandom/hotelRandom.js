import React, { useEffect, useState } from 'react';
import hotelsService from '../../services/hotels';
import {  MDBCardTitle 
  } from 'mdb-react-ui-kit';


function HotelRandom() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    hotelsService.list()
      .then(hotels => setHotels(hotels))
      .catch(error => console.error(error))
  }, []);

  return (
    <>
       <div className="project-item card text-bg-dark"></div>
     <div id= "flush-module" className="accordion-collapse collapse show">
     <div className="accordion-body">
     <div className="row g-2">
      {hotels.map((hotel) => 
      <div  className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={hotel.id}><h1>{hotel.city}</h1>
      <div  className="accordion-item">
     
      <img className="card-img" src= {hotel.picture}  alt={hotel.name} />
      
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


