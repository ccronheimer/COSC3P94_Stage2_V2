import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="Main">
        <div className="Title">
          Fake Estate
        </div>
        <ul>
          <li>CAD</li>
          <li>Sign-In</li>
          <li>Fr</li>
        </ul>
      </div>
      <div className="Toolbox">
        <ul className="Dir">
          <li>Buy</li>
          <li>Sell</li>
          <li>Agents</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
