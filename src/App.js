import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="MainContent">
        <img className="MainImg" src={require("./imgs/houses.png")} width="65%"/>
        <div className="Search">
          <div className="TextField" contenteditable="true" placeholder="Search A Location..."></div>
        </div>
      </div>
      <div className="Feed">
        <div className="FeedItem">
          <img src={require("./imgs/party.png")} className="FeedImg"/>
          <div className="FeedText">
            Book Your Viewing Today
          </div>
        </div>
        <div className="FeedItem">
          <img src={require("./imgs/neighbourhood.png")} className="FeedImg"/>
          <div className="FeedText">
            Find What's Right for You
          </div>
        </div>
        <div className="FeedItem">
          <img src={require("./imgs/computer.png")} className="FeedImg"/>
          <div className="FeedText">
            Get Your Estimate Today
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
