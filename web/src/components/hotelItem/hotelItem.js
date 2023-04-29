import React from 'react'
import { Link } from 'react-router-dom';

 function HotelItem({hotel: { id, name, picture, city, rooms }}) {
  return (
    <div className="project-item card text-bg-dark">
     <Link to={`/hotels/${id}`}> <img src={picture} className="card-img" alt={name} width={600}/> </Link>
     </div> 
  )
}
export default HotelItem