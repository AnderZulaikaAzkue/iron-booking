
import "./hotelByCity.css";

const HotelByCity = () => {

return (
  <div className="featured">
  
        <div className="featuredItem">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/5f/12/8d/caption.jpg?w=700&h=500&s=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Madrid</h2>
            <h3>5 properties</h3>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://interrailero.com/wp-content/uploads/2022/01/que-ver-en-barcelona-mapa.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Barcelona</h2>
            <h3> 6 properties</h3>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>London</h2>
            <h3> 1 properties</h3>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Paris</h2>
            <h3> 1 properties</h3>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://a.cdn-hotels.com/gdcs/production112/d1899/d77bcff2-a859-4785-bdb1-3b15a0887607.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h2>Amsterdam</h2>
            <h3> 1 properties</h3>
          </div>
        </div>
      
  </div>
);
};

export default HotelByCity;