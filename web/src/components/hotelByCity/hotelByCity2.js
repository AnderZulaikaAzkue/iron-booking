import "./hotelByCity.css";
import { Link } from 'react-router-dom'


const HotelByCity2 = () => {

  return (
    <div className="featured">

      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/5f/12/8d/caption.jpg?w=700&h=500&s=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Madrid</h2>
            <h3>5 properties</h3>
          </div>
        </Link>
      </div>

      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://interrailero.com/wp-content/uploads/2022/01/que-ver-en-barcelona-mapa.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Barcelona</h2>
            <h3> 6 properties</h3>
          </div>
        </Link>
      </div>
      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/panoramica-bilbao-guggenheim-1634221518.png"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Bilbao</h2>
            <h3> 10 properties</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelByCity2;