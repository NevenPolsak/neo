import React from "react";
import "./Footer.css"

const data = [
  {
    id: 1,
    title: "Development",
  },
  {
    id: 2,
    title: "Community",
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        {data.map((footer) => {
          return (
            <div className="col" key={footer.id}>
              <h4>{footer.title}</h4>
              <p>Network</p>
              <p>Enabled</p>
              <p>Operations</p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Footer;
