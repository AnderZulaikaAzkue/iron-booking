import { Routes, Route, } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HotelsList from "./components/hotelList/hotelList";

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>

  );
}

export default App;
