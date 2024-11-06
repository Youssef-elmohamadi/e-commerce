import React from "react";
import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className=" home-container mb-5">
        <div className="container d-flex flex-column align-items-md-start justify-content-center align-items-center  h-100">
          <p className="home-text mb-2 fs-5 text-capitalize fw-bolder letter-spacing">
            Sliver aluminium
          </p>
          <h1 className="text-uppercase mb-2  fw-bold letter-spacing">
            apple watch
          </h1>
          <p className="fs-6 text-secondary">30% off at your first order</p>
          <button className="btn  btn-outline-dark shop-btn ">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Home;
