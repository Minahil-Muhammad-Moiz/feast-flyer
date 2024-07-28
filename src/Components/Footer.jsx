import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{"background-color": "rgba(0, 0, 0, 0.05)"}}
      >
        <span>© 2024 Copyright: </span>
        <Link className="text-body" to="/">
           Feast Flyer
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
