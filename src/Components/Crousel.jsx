import React from "react";
import img2 from "../Assets/crousel-2.webp";
import img3 from "../Assets/crousel-3.jpg";
import img1 from "../Assets/crousel-1.jpg";

const Crousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      
    >
      <div className="carousel-inner" style={{ objectFit:'cover !important', maxHeight: '500px'}}>
        <div className="carousel-caption" style ={{zIndex: '10'}}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success bg-success text-white" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="couselImg" style={{filter: 'brightness(30%)'}} />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="couselImg"  style={{filter: 'brightness(30%)'}}/>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="couselImg" style={{filter: 'brightness(30%)'}} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Crousel;
