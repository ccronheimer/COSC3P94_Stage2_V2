import React from "react";
const Brice = () => {
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
            Properties available for sale from our realtor Brice Bolin:
            </p>
            
            <div>
            <img className="property" src={require("../../assets/House13.jpg")}/>
            <ul><h4>654 Ronville Road</h4></ul>
            <ul>$1,100,000</ul>
            <ul>3 Bed, 3 Bath</ul>           
           </div>

            <div>
            <img className="property" src={require("../../assets/House14.jpg")}/>
            <ul><h4>476 Sixth Line</h4></ul>
            <ul>$965,000</ul>
            <ul>4 Bed, 3 Bath</ul>
            </div>            
            
            <div>
            <h2>NEW BUILD!</h2>
            <img className="property" src={require("../../assets/House15.jpg")}/>
            <ul><h4>14 Fredrick Drive</h4></ul>
            <ul>$1,324,000</ul>
            <ul>5 Bed, 3 Bath</ul>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brice;
