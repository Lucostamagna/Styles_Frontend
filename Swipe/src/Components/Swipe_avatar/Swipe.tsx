import React from "react";
import "../Swipe_style.css"
import avatar from "../../assets/avatar.jpg";


const Swipe = () => {
  return (
    <>
    <div className="cardContainer">
      <div className="card">
        <div className="cardImg">
          <img className="img" src={avatar} />
          <div className="cardGrid">
            {Array.from({ length: 100 }, (_, index) => (
              <a key={index} className="cardGrideffect" href="#">
                {" "}
              </a>
            ))}
          </div>
        </div>
      </div>
    <div className="card2">
    <div className="cardImg2">
          <img className="img2" src={avatar} />
          <div className="cardGrid2">
            {Array.from({ length: 100 }, (_, index) => (
              <a key={index} className="cardGrideffect2" href="#">
                {" "}
              </a>
            ))}
          </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Swipe;
