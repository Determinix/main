import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#f9f8f8]">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Project" element={<Project />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
