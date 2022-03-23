import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div>
          <div>
            <img src="http://placehold.it/900x400" alt="" />
          </div>
          <div>
            <h1>About</h1>
            <p>
            From a single office that opened in 1962 in Toronto, Ontario, Fake Estate LLC has grown into one of the leading global real estate franchisors,</p><p> with over 135,000 agents in more than 115 countries and territories
            </p>
            <img src={require("../../assets/neighbourhood.png")}/>
            <p>
            The global network of franchisee-owned and -operated offices are run with the world's most productive real estate sales agents.
            </p>
            <img src={require("../../assets/header.jpeg")}/>
            <p>
            Customer service built on a foundation of drive, experience and education  is the cornerstone of Fake Estate success. Backed by the ability to deliver,</p><p> remains as important as ever.
            </p>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
