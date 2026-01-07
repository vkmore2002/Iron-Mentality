import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Exercise from "./pages/Exercise.jsx";
import Workouts from "./pages/Workouts.jsx";
import Navbar from "./Components/Navbar.jsx";
// import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exercises" element={<Exercise />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
