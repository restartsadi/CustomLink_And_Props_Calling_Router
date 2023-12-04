import { NavBar } from "./Components/NavBar";
import { Home, About, Services, Pricing } from "./Pages";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </>
  );
}
