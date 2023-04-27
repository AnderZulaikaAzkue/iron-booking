import React from 'react'
import { Link } from 'react-router-dom';

 function hotelItem({ hotel: { id, name, picture, city, rooms, } }) {
  return (
    <div className="project-item card text-bg-dark">
    <img src={picture} className="card-img" alt={name} />
    <div className="card-img-overlay">
      <div className="d-flex flex-column h-100">
        <div className="d-flex align-items-baseline">
          <h5 className="card-title px-3 py-1 fs-5 fw-lighter text-dark me-auto"><Link to={`/hotels/${id}`} className='text-dark link-underline-opacity-0'>{city}</Link></h5>
          <a href={rooms} target='blank' className='text-dark fs-3 link-underline-opacity-0'><i className='fa fa-github'></i></a>
        </div>
        <div className="d-flex mt-auto align-items-center">
          <div className='me-auto'>
            {city.map(tag => <span key={city} className="me-1 badge text-bg-light">{city}</span>)}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default hotelItem