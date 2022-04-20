import React from "react";
const Michelle = () => {
  return (
    <div className="about">
      <div className="container">
        <div>
          <div>
            <img src="http://placehold.it/900x400" alt="" />
          </div>
          <div>
            <h1>Properties</h1>
            <p>
            Properties available for sale from our realtor Michelle To:
            </p>
            <div>
            <img className="property" src={require("../../assets/House18.jpg")}/>
            <ul><h4>74 Vinland Road</h4></ul>
            <ul>$1,647,000</ul>
            <ul>3 Bed, 2 Bath</ul>
            </div>
            <div>
            <img className="property" src={require("../../assets/House19.jpg")}/>
            <ul><h4>965 Killstone Drive</h4></ul>
            <ul>$1,400,000</ul>
            <ul>4 Bed, 4 Bath</ul>
            </div>
            <div>
            <img className="property" src={require("../../assets/House20.jpg")}/>
            <ul><h4>4 Riverside Road</h4></ul>
            <ul>$1,845,000</ul>
            <ul>4 Bed, 4 Bath</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Michelle;
