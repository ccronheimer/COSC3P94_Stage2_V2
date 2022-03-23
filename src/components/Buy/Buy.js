import React from "react";
import "./Buy.css";
export const Buy = () => {
  return (
    <div className="Buy">
    <div className="leftSidebar">
      <div className="search">
          Vancouver, BC
      </div>
      <div className="searchItem">
          <img src={require("../../assets/woods.png")} className="searchImg" width="225px" height="150px"/>
          <div className="totPrice">
              <div className="price">
                  $
              </div>
              <div className="price">
                  $
              </div>
          </div>
      </div>
      <div className="searchItemTall">
          <img src={require("../../assets/apartment.png")} className="searchImgTall" width="133px" height="200px"/>
          <div className="totPriceTall">
              <div className="price">
                  $
              </div>
              <div className="price">
                  $
              </div>
          </div>
      </div>
      <div className="searchItem">
          <img src={require("../../assets/cottage.png")} className="searchImg" width="225px" height="150px"/>
          <div className="totPrice">
              <div className="price">
                  $
              </div>
              <div className="price">
                  $
              </div>
              <div className="price">
                  $
              </div>
          </div>
      </div>
    </div>
    <div className="main">
      <img src={require("../../assets/canMap.png")} className="mainImg"/>
    </div>
    <div className="rightSidebar">
      <div className="filter">
          <div className="filterItem">
              Price Range
          </div>
          <img src={require("../../assets/Group1.png")}/>
          <div className="filterItem">
              Bedrooms
          </div>
          <img src={require("../../assets/Group2.png")}/>
          <div className="filterItem">
              Bathrooms
          </div>
          <img src={require("../../assets/Group3.png")}/>
      </div>
    </div>
  </div>
  );
};
