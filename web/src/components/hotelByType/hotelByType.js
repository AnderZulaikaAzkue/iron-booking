import React from 'react'
import { Link } from 'react-router-dom'

function HotelByType() {

  
  return (
    <div className="featured">

      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://majestichotelgroup.com/web/majestic/homepage/mobile/slider/00majestic-hotel-and--spa-fachada.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h3> 150 Hotels</h3>
          </div>
        </Link>
      </div>

      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://www.myluxoria.com/storage/app/uploads/public/630/77d/1e4/63077d1e4e7a2970728706.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h3> 25 Villas</h3>
          </div>
        </Link>
      </div>
      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://www.hostelworld.com/blog/wp-content/uploads/2017/01/14272277_1062193800483058_1028147755_n.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h3> 180 Hostels</h3>
          </div>
        </Link>
      </div>
      <div className="featuredItem">
      <div className='bg-image hover-overlay'>

        <Link className='city-link' to="/">
          <img
            src="https://static.dezeen.com/uploads/2021/01/niliaitta-cabin-studio-puisto-finland_dezeen_2364_sq3.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h3> 5 Cabins</h3>
          </div>
        </Link>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
</div>
      </div>
    </div>
  )
}
export default HotelByType