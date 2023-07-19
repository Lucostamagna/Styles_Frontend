import React from "react";
import "../Swipe_style.css"
import avatar from "../../assets/avatar.jpg";


const Swipe = () => {
  return (
    <>
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
    
    </>
  );
};

export default Swipe;
