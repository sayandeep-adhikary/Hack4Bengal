// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import LobbyScreen from "./screens/Lobby";
// import RoomPage from "./screens/Room";

// function App() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<LobbyScreen />} />
//         <Route path="/room/:roomId" element={<RoomPage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CompanyPage from "./pages/CompanyPage";

function App() {
  return (
    <>
      <Navbar />
      <CompanyPage />
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      {/* </Routes> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
