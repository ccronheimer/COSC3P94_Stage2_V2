import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Buy } from "./Buy/Buy";
import Sell from "./Sell/Sell";
import Agents from "./Agents/Agents";
import Calculator from "./Calculator/Calculator";
import About from "./About/About";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
