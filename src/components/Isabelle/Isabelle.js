import React from "react";
const Isabelle = () => {
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
            Properties available for sale from our realtor Isabelle Germany:
            </p>
            <div>
            <img className="property" src={require("../../assets/House21.jpg")}/>
            <ul><h4>3412 Lockhorn Drive</h4></ul>
            <ul>$332,000</ul>
            <ul>3 Bed, 3 Bath</ul>
            </div>
            <div>
            <img className="property" src={require("../../assets/House22.jpg")}/>
            <ul><h4>5623 Boden Street</h4></ul>
            <ul>$475,000</ul>
            <ul>4 Bed, 3.5 Bath</ul>
            </div>

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

export default Isabelle;
