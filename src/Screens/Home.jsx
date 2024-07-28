import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Crousel from "../Components/Crousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Crousel />
      <Card />
      <Card />
      <Card />
      <Card />

      <Footer />
    </div>
  );
};

export default Home;
