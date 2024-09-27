import React from "react";
import "./homeproject.css";
import image2 from "./IMAGE (2).png";
import image3 from "./IMAGE (3).png";

const Homeproject = () => {
  return (
    <div className="project">
      <section className="services-section">
        <div className="service-item1">
          <img src={image2} alt="Bicycle on a hill" />
          <p>
            My services are perfect for <br /> companies that are just getting{" "}
            <br /> started <br />
            <br />
            <button className="cta-button">Learn more</button>
          </p>
        </div>

        <div className="service-item2">
          <img src={image3} alt="Landscape" />
          <p>
            Im always on the go. Follow <br /> along!
            <br />
            <br />
            <button className="cta-button">@aloha</button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homeproject;