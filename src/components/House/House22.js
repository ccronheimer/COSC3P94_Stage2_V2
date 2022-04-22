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
            This property is available for sale from our realtor James Hattaway:
            </p>
            <div>
            <img className="property" src={require("../../assets/House22.jpg")}/>
            <ul><h4>5623 Boden Street</h4></ul>
            <ul>$475,000</ul>
            <ul>4 Bed, 3.5 Bath</ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default House21;
