import React from 'react'


import { Link } from 'react-router-dom';

function HotelItem({ hotel: { id, name, description, picture, city, address } }) {
  

  return (
    <div className="hotel-item card text-bg-dark">
      <img src={picture} className="card-img" alt={name} />
      <div className="card-img-overlay">
        <div className="d-flex flex-column h-100">
          <div className="d-flex align-items-baseline">
            <h5 className="card-title px-3 py-1 fs-5 fw-lighter text-dark me-auto"><Link to={`/hotels/${id}`} className='text-dark link-underline-opacity-0'>{name}</Link></h5>
            <a href={city} target='blank' className='text-dark fs-3 link-underline-opacity-0'><i className='fa fa-github'></i></a>
          </div>
          <div className="d-flex mt-auto align-items-center">
            <div className='me-auto'>
            <h5>{description}</h5>
            <h5>{address}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelItem