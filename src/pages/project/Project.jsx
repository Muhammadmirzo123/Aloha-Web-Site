import React from "react";
import "./project.css";
import Homeproject from "../../components/homeProjects/HomeProjects";
import Homeinfo from "../../components/homeinfo/Homeinfo";
import Talk from "../../components/talk/Talk";
import Footer from "../../components/footer/Footer";
import Home from "../home/Home";

const Project = () => {
  return (
    <div>
      <Home />
      <Homeproject />
      <Homeinfo />
      <Talk />
      <Footer />
    </div>
  );
};

export default Project;
