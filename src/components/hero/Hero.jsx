import React from "react";
import "./Hero.css";
import MainVideo from "../../assets/video.mp4"

function Hero() {
  return <div className="hero">
 <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
           <div className="hero-text">
           <h1>Decentralized</h1>
                <h1><span className="blue">	Network-Enabled</span> Operations</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, nihil.</p>
                <div className="btn-group">
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
           
  </div>;
}

export default Hero;
