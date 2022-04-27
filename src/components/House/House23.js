import React from "react";
const House21 = () => {
  return (
    <div className="about">
      <div className="container">
        <div>
          <div>
            <img src="http://placehold.it/900x400" alt="" />
          </div>
          <div>
            <h1>For Sale</h1>
            <p>
            This property is available for sale from our realtor James Isabelle Germany:
            </p>
            <div> 
            <img className="property" src={require("../../assets/House23.jpg")}/>
            <ul><h4>872 Cliff Road</h4></ul>
            <ul>$384,000</ul>
            <ul>2 Bed, 2 Bath</ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default House21;
