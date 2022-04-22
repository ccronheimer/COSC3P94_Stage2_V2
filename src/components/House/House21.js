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
            <img className="property" src={require("../../assets/House21.jpg")}/>
            <ul><h4>3412 Lockhorn Drive</h4></ul>
            <ul>$332,000</ul>
            <ul>3 Bed, 3 Bath</ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default House21;
