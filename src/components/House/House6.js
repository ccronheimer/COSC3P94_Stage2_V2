import React from "react";
const House6 = () => {
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
            This property is available for sale from our realtor James Hattaway:
            </p>
            <div>
            <img className="property" src={require("../../assets/House6.jpg")}/>
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

export default House6;
