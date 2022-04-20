import React from "react";
const John = () => {
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
            Properties available for sale from our realtor John Waggoner:
            </p>
            <div>
            <img className="property" src={require("../../assets/House7.jpg")}/>
            <ul><h4>786 Brighthorn Road</h4></ul>
            <ul>$663,000</ul>
            <ul>4 Bed, 3 Bath</ul>
            </div>
            <div>
            <img className="property" src={require("../../assets/House9.jpg")}/>
            <ul><h4>542 Vernin Street</h4></ul>
            <ul>$874,000</ul>
            <ul>4 Bed, 3 Bath</ul>
            </div>
            <div>
            <img className="property" src={require("../../assets/House12.jpg")}/>
            <ul><h4>8754 Jameson Street</h4></ul>
            <ul>$763,000</ul>
            <ul>3 Bed, 2 Bath</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default John;
