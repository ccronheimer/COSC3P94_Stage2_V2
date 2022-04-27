import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Container">
      <div className="Header-top">
        <Link className="Title" to="COSC3P94_Stage2_V2/">
          Fake Estate
        </Link>
        <div className="Header-top-right">
          <Link className="button" to="/COSC3P94_Stage2_V2/signin">
          <div className="button-txt">
          Sign in
          </div>
           
          </Link>

          <Link className="sbutton" to="/COSC3P94_Stage2_V2/signup">
          <div className="button-txt">
          Sign up
          </div>
           
          </Link>
        </div>
      </div>

      <div className="Toolbox">
        <div className="Dir">
          <Link className="Link" to="/COSC3P94_Stage2_V2/buy">
            Buy
          </Link>

          <Link className="Link" to="/COSC3P94_Stage2_V2/sell">
            Sell
          </Link>

          <Link className="Link" to="/COSC3P94_Stage2_V2/agents">
            Agents
          </Link>

          <Link className="Link" to="/COSC3P94_Stage2_V2/calculator">
            Calculator
          </Link>

          <Link className="Link" to="/COSC3P94_Stage2_V2/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
