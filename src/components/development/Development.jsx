import React from "react";
import "./Development.css";
import Terminal from "../../assets/terminal.png";

function Development() {
  return (
    <div>
      <div className="development" name="development">
        <div className="container">
          
          <div className="left">
            <h2>NEO high-tech development</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur{" "}
              <span className="blue">adipisicing elit</span> adipisicing elit.
              Voluptatem sapiente reprehenderit dolorem excepturi, cum dolores.
            </p>
          </div>
          <div className="right">
            <div className="img-container">
              <img src={Terminal} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
