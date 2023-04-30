import React from 'react'
import { Link } from 'react-router-dom';

 function HotelItem({hotel: { id, name, picture, city, }}) {
  return (
    <Link to={`/hotels/${id}`} style={{textDecoration: 'none', color: 'black'}}>
    <div>
      <img src={picture[0]} alt="hotel" width={'500px'}/>
    </div>
    <div className='d-flex flex-column'>
      <span className='mt-2'><b>{name}</b></span>
      <span className='mt-1'>{city}</span>

    </div>
  </Link>
  )
}
export default HotelItem