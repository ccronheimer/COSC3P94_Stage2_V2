import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="MainContent">
        <img
          className="MainImg"
          src={require("../../assets/houses.png")}
        
          alt="houses"
        />
        <div className="Search">
          <div
            className="TextField"
            contenteditable="true"
            placeholder="Search A Location..."
          ></div>
        </div>
      </div>
      <div className="Feed">
        <div className="FeedItem">
          <img
            src={require("../../assets/party.png")}
            className="FeedImg"
            alt="party"
          />
          <div className="FeedText">Book Your Viewing Today</div>
        </div>
        <div className="FeedItem">
          <img
            src={require("../../assets/neighbourhood.png")}
            className="FeedImg"
            alt="neighbourhood"
          />
          <div className="FeedText">Find What's Right for You</div>
        </div>
        <div className="FeedItem">
          <img
            src={require("../../assets/computer.png")}
            className="FeedImg"
            alt="computer"
          />
          <div className="FeedText">Get Your Estimate Today</div>
        </div>
      </div>
    </>
  );
};

export default Home;
