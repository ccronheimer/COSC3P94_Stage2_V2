import React from "react";
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
            <div>
            <img className="property" src={require("../../assets/House8.jpg")}/>
            <ul><h4>5436 Heilder Drive</h4></ul>
            <ul>$650,000</ul>
            <ul>3 Bed, 4 Bath</ul> 
            </div>

            <div>
            <img className="property" src={require("../../assets/House11.jpg")}/>
            <ul><h4>15 Illstand Drive</h4></ul>
            <ul>$842,000</ul>
            <ul>5 Bed, 4 Bath</ul> 
            </div>

            <div>
            <img className="property" src={require("../../assets/House7.jpg")}/>
            <ul><h4>88 Clark Road</h4></ul>
            <ul>$524,000</ul>
            <ul>2 Bed, 2 Bath</ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default James;
