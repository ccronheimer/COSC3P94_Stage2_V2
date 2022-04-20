import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Buy } from "./Buy/Buy";
import Sell from "./Sell/Sell";
import Agents from "./Agents/Agents";
import Calculator from "./Calculator/Calculator";
import About from "./About/About";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Isabelle from "./Isabelle/Isabelle";
import Brice from "./Brice/Brice";
import James from "./James/James";
import John from "./John/John";
import Lana from "./Lana/Lana";
import Michelle from "./Michelle/Michelle"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/COSC3P94_Stage2" element={<Home />} />
        <Route path="/COSC3P94_Stage2/buy" element={<Buy />} />
        <Route path="/COSC3P94_Stage2/sell" element={<Sell />} />
        <Route path="/COSC3P94_Stage2/agents" element={<Agents />} />
        <Route path="/COSC3P94_Stage2/calculator" element={<Calculator />} />
        <Route path="/COSC3P94_Stage2/about" element={<About />} />
        <Route path="/COSC3P94_Stage2/isabelle" element={<Isabelle />} />
        <Route path="/COSC3P94_Stage2/james" element={<James />} />
        <Route path="/COSC3P94_Stage2/brice" element={<Brice />} />
        <Route path="/COSC3P94_Stage2/lana" element={<Lana />} />
        <Route path="/COSC3P94_Stage2/john" element={<John />} />
        <Route path="/COSC3P94_Stage2/michelle" element={<Michelle />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
