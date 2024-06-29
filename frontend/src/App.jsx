import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import UserProfile from "./pages/UserProfile";
import CompanyPage from "./pages/CompanyPage";
import Lobby from "./screens/Lobby.jsx";
function App() {
  return (
    <>
      <Navbar />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
