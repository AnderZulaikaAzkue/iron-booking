

import HotelByCity2 from "../../components/hotelByCity/hotelByCity2";
import HotelByType from "../../components/hotelByType/hotelByType";

import "./HomePage.css";

const HomePage = () => {
  return (

    <div className="homeContainer">
      <h1 className="homeTitle">Browse by property type</h1>
      <HotelByType />
      <h1 className="homeTitle">Most Popular Cities</h1>
     
      <HotelByCity2 />
    
    </div>
  );
};

export default HomePage;