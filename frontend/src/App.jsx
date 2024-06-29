import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import UserProfile from "./pages/UserProfile";
import CompanyPage from "./pages/CompanyPage";
import Lobby from "./screens/Lobby.jsx";
import Room from "./screens/Room.jsx";
import { useState } from "react";
function App() {
  const [isCandidate, setIsCandidate] = useState(true);
  return (
    <>
      <Navbar isCandidate={isCandidate} />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login isCandidate={isCandidate} setIsCandidate={setIsCandidate} />
          }
        />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/room/:roomid" element={<Room />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
