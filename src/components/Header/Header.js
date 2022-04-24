import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Container">
      <div className="Header-top">
        <Link className="Title" to="COSC3P94_Stage2/">
          Fake Estate
        </Link>
        <div className="Header-top-right">
        <div className="button">
        <Link to="/COSC3P94_Stage2/signin">
            Sign in 
          </Link>
        </div>
        
          <button className="button">CAD</button>
          <button className="button">FRE</button>
        </div>
      </div>

      <div className="Toolbox">
        <div className="Dir">
          <Link className="Link" to="/COSC3P94_Stage2/buy">
            Buy
          </Link>

          <Link className="Link" to="/COSC3P94_Stage2/sell">
            Sell
          </Link>

          <Link className="Link" to="/COSC3P94_Stage2/agents">
            Agents
          </Link>

          <Link className="Link" to="/COSC3P94_Stage2/calculator">
            Calculator
          </Link>

          <Link className="Link" to="/COSC3P94_Stage2/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
