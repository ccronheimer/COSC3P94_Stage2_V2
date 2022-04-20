import React from "react";
const Lana = () => {
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
            Properties available for sale from our realtor Lana Martin:
            </p>
            <div>
            <img className="property" src={require("../../assets/House10.jpg")}/>
            <ul><h4>56 Hunder Lane</h4></ul>
            <ul>$647,000</ul>
            <ul>3 Bed, 2 Bath</ul>
            </div>
            <div>
            <img className="property" src={require("../../assets/House16.jpg")}/>
            <ul><h4>846 Dellton Drive</h4></ul>
            <ul>$1,123,000</ul>
            <ul>5 Bed, 3 Bath</ul>
            </div>
            <div>
            <img className="property" src={require("../../assets/house17.jpg")}/>
            <ul><h4>1114 Cliffside Drive</h4></ul>
            <ul>$1,345,000</ul>
            <ul>6 Bed, 4 Bath</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lana;
