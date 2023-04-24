import "./hotelByCity.css";
import { Link } from 'react-router-dom'


const HotelByCity = () => {

  return (
    <div className="featured">

      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://www.visitberlin.de/system/files/styles/visitberlin_teaser_block_small_visitberlin_mobile_1x/private/image/iStock_000049394172_istock.com_Mapics_DL_PPT_0.jpg?h=5f29f7b4&itok=1pMBIJfS"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Berlin</h2>
            <h3>5 properties</h3>
          </div>
        </Link>
      </div>

      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://images.hola.com/imagenes/viajes/20210915196086/praga-experiencias-ciudad-alrededores/0-994-736/panoramica-praga-m.jpg?tx=w_680"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Prague</h2>
            <h3> 6 properties</h3>
          </div>
        </Link>
      </div>
      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>London</h2>
            <h3> 1 properties</h3>
          </div>
        </Link>
      </div>
      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Paris</h2>
            <h3> 1 properties</h3>
          </div>
        </Link>
      </div>
      <div className="featuredItem">
        <Link className='city-link' to="/">
          <img
            src="https://a.cdn-hotels.com/gdcs/production112/d1899/d77bcff2-a859-4785-bdb1-3b15a0887607.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Amsterdam</h2>
            <h3> 1 properties</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelByCity;