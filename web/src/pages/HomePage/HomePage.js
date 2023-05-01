import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import HotelByCity2 from "../../components/hotelByCity/hotelByCity2";
import HotelByType2 from "../../components/hotelByType/hotelByType2";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
<Header/>
    <div className="homeContainer">
      <h1 className="homeTitle">Browse by property type</h1>
      <HotelByType2 />
      <h1 className="homeTitle">Most Popular Cities</h1>
      <HotelByCity2 />
      <Footer/>
    </div>
    </>
  );
};

export default HomePage;