import React from "react";
import "./About.css";
import data from "./data";

function About() {
  return (
    <div className="about" name="about">
      <div className="container">
        <h2>Adapting Modeling & Simulation</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad deleniti
          culpa eum officiis eveniet tenetur?
        </p>
        <div className="card-container">
          {data.map((about) => {
            return (
              <div className="card" key={about.id}>
                <div className="icon-container">{about.icon}</div>
                <h3>{about.heading}</h3>
                <p>{about.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
