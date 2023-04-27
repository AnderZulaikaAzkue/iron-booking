import { Routes, Route, } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthStore from './contexts/AuthStore';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Navbar from "./components/navbar/Navbar";

import HotelsList from "./components/hotelList/HotelsList";
import HotelDetail from "./components/hotelDetail/HotelDetail";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import HotelPage from "./pages/HotelPage/HotelPage";

function App() {
  return (
    <>
      <AuthStore>
      
        <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage/>}/>
          <Route path="/hotels/:hotelId" element={<HotelPage />} />
          <Route path="/places" element={<HotelsList/>} />
          <Route path="/detail" element={<HotelDetail/>} />
        </Routes>

      </AuthStore>
    </>
  );
}

export default App;
