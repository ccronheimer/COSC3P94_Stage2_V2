import React from "react";
import { Link } from "react-router-dom";
const James = () => {
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
            Properties available for sale from our realtor James Hattaway:
            </p>
            <Link className="property" to="/COSC3P94_Stage2/house8">
            <img className="property" src={require("../../assets/House8.jpg")}/>
            <ul><h4>5436 Heilder Drive</h4></ul>
            <ul>$650,000</ul>
            <ul>3 Bed, 4 Bath</ul> 
            </Link>

            <Link className="property" to="/COSC3P94_Stage2/house11">
            <img className="property" src={require("../../assets/House11.jpg")}/>
            <ul><h4>15 Illstand Drive</h4></ul>
            <ul>$842,000</ul>
            <ul>5 Bed, 4 Bath</ul> 
            </Link>

            <Link className="property" to="/COSC3P94_Stage2/house6">
            <img className="property" src={require("../../assets/House6.jpg")}/>
            <ul><h4>88 Clark Road</h4></ul>
            <ul>$524,000</ul>
            <ul>2 Bed, 2 Bath</ul>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default James;
