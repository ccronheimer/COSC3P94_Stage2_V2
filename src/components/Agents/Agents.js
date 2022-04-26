import React from "react";
import "./Agents.css";
import { Link } from "react-router-dom";

const Agents = () => {
  return (
    <div className="Bgimg2">
    <div className="container">
      <div className="agents-container">
        <Link className="agent" to="/COSC3P94_Stage2_V2/Isabelle">
          <img
          
            src="https://121clicks.com/wp-content/uploads/2021/09/how_to_capture_corporate_headshots_01.jpeg"
            alt="person1"
            width="300px"
          />
            <h2 className="name">Isabelle R. Germany</h2>
          <div className="description">
            <ul>Toronto, ON</ul>
            <ul>647-507-8731</ul>
            <ul>IsabelleGermany@remax.ca</ul>
          </div>
        </Link>

        <Link className="agent" to="/COSC3P94_Stage2_V2/James">
          <img
           
            src="https://i.pinimg.com/originals/06/27/60/0627602bb0cc87537550581b3603318e.jpg"
            alt="person2"
            width="300px"
          />
            <h2 className="name">James M. Hattaway</h2>
          <div className="description">
            <ul>Hamilton, ON</ul>
            <ul>905-381-6423</ul>
            <ul>JHattaway@FakeEstate.ca</ul>
            </div>   
        </Link>

        <Link className="agent" to="/COSC3P94_Stage2_V2/Brice">
          <img
          
            src="https://www.thesocialmediahat.com/wp-content/uploads/2019/08/Real-Estate-Agent-Social-Media.jpg"
            alt="person2"
            width="300px"
          /> 
          <h2 className="name">Brice L. Bolin</h2>
          <div className="description">
            <ul>Toronto, ON</ul>
            <ul>647-413-8645</ul>
            <ul>BBolin@FakeEstate.ca</ul>
          </div>
        </Link>

        <Link className="agent" to="/COSC3P94_Stage2_V2/Lana">
          <img
           
            src="https://www.thewarrengroup.com/wp-content/uploads/2020/10/iStock-1209149920.jpg"
            alt="person2"
            width="300px"
          />
          <h2 className="name">Lana S. Martin</h2>
          <div className="description">
            <ul>Mississauga, ON</ul>
            <ul>905-821-4268</ul>
            <ul>LanaMartin@FakeEstate.ca</ul>
          </div>
        </Link>

        <Link className="agent" to="/COSC3P94_Stage2_V2/John">
          <img
          
            src="https://thumbs.dreamstime.com/b/male-real-estate-agent-indoors-115101372.jpg"
            alt="person2"
            width="300px"
          />
            <h2 className="name">John R. Waggoner</h2>
          <div className="description">
            <ul>Etobicoke, ON</ul>
            <ul>416-620-4551</ul>
            <ul>JWaggoner@FakeEstate.ca</ul>
          </div>
        </Link>

        <Link className="agent" to="/COSC3P94_Stage2_V2/Michelle">
          <img

            src="https://media.istockphoto.com/photos/female-real-estate-agent-holding-sold-sign-outside-home-picture-id182434280?k=20&m=182434280&s=612x612&w=0&h=qvX1_RsIo9VAQZk-zeNYCwTQttTS6qcTqhowWnDLhlo="
            alt="person2"
            width="300px"
          />
            <h2 className="name">Michelle M. To</h2>
          <div className="description">
            <ul>Toronto, ON</ul>
            <ul>416-427-0646</ul>
            <ul>MichelleTo@FakeEstate.ca</ul>
          </div>
        </Link>

      </div>
     </div>
    </div>
  );
};

export default Agents;
