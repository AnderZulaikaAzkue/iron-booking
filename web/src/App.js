import { Routes, Route, } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthStore from './contexts/AuthStore';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <AuthStore>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

      </AuthStore>
    </>
  );
}

export default App;
