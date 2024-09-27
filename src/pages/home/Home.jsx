import React from "react";
import "./home.css";
import image1 from "./IMAGE (1).png";
import Header from "../../components/header/Header";
import Homeproject from "../../components/homeProjects/HomeProjects";
import Homeinfo from "../../components/homeinfo/Homeinfo";
import Talk from "../../components/talk/Talk";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return ( 
    <div>
      <Header />
      <div className="home-container">
        <section className="intro-section">
          <h1>
            Creating purpose-built brands <br /> & websites
          </h1>
          <img src={image1} alt="Working on a laptop" className="intro-image" />
          <h1>
            I help emerging brands get their <br /> footing in today's digital
            world.
          </h1>
        </section>

        <section className="description-section">
          <button className="cta-button">See my work</button>
        </section>
      </div>
      <Homeproject />
      <Homeinfo />
      <Talk />
      <Footer />
    </div>
  );
};

export default Home;
