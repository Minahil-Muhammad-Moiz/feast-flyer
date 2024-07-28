import React from "react";
import img1 from "../Assets/crousel-1.jpg";

const Card = () => {
  return (
    <div class="card m-4" style={{ width: "18rem", maxHeight: "360px" }}>
      <img src={img1} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is Card Detail.</p>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="Half">Half</option>
            <option value="Full">Full</option>
          </select>
          <div className="fs-5 d-inline h-100">Total Price</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
