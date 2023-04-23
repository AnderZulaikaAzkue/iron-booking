import HotelByCity from "../../components/hotelByCity/hotelByCity";
import "./HomePage.css";

const HomePage = () => {
  return (

    <div className="homeContainer">
      <h1 className="homeTitle">Browse by property type</h1>

      <h1 className="homeTitle">Most Popular Cities</h1>
      <HotelByCity />
    </div>
  );
};

export default HomePage;