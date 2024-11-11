import React, { useState, useContext, useEffect } from "react";
import homeProduct from "../home_product.js";
import "./css/home-products.css";
import { FaRegEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { ProductsContext } from "./ProductsContext";

const testmpnial = `${process.env.PUBLIC_URL}/images/T1.avif`;
const ads1 = `${process.env.PUBLIC_URL}/images/Multi-Banner-1.avif`;
const ads2 = `${process.env.PUBLIC_URL}/images/Multi-Banner-2.avif`;
const ads3 = `${process.env.PUBLIC_URL}/images/Multi-Banner-3.webp`;
const ads4 = `${process.env.PUBLIC_URL}/images/Multi-Banner-4.avif`;
const ads5 = `${process.env.PUBLIC_URL}/images/Multi-Banner-5.webp`;
// const testmpnial = `${process.env.PUBLIC_URL}/images/T1.avif`;
const HomeProducts = () => {
  const { products, filter } = useContext(ProductsContext);
  const [newProducts, setNewProducts] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  const categoryFilter = () => {
    const { newProducts, featureProducts, topProducts } = homeProduct.reduce(
      (acc, item) => {
        if (item.type === "new") acc.newProducts.push(item);
        else if (item.type === "featured") acc.featureProducts.push(item);
        else if (item.type === "top") acc.topProducts.push(item);
        return acc;
      },
      { newProducts: [], featureProducts: [], topProducts: [] }
    );

    setNewProducts(newProducts);
    setFeatureProducts(featureProducts);
    setTopProducts(topProducts);
  };
  useEffect(() => {
    categoryFilter();
  }, []);

  return (
    <>
      <div className="home-products mt-5 d-flex w-100 container-fluid w-100 justify-content-around flex-wrap   ">
        <div className="left-section   ">
          <div className="products-heading py-2 d-flex justify-content-between align-items-center m-0 rounded  ">
            <h2
              className="px-md-3 px-1 mb-0 fs-6 fs-md-5"
              onClick={() => {
                filter("all");
              }}
            >
              Trending
            </h2>
            <div className="products-category d-flex   ">
              <h2
                className="px-2 pe-auto mb-0 fs-5"
                onClick={() => {
                  filter("new");
                }}
              >
                New
              </h2>
              <h2
                className="px-2 mb-0 fs-5"
                onClick={() => {
                  filter("featured");
                }}
              >
                Featured
              </h2>
              <h2
                className="px-2 mb-0 fs-5"
                onClick={() => {
                  filter("top");
                }}
              >
                Top Selling
              </h2>
            </div>
          </div>
          <div className="products-card d-flex flex-wrap w-100 mb-4">
            {products.map((item) => {
              return (
                <div
                  key={item.id}
                  class="product-box card position-relative overflow-hidden  "
                >
                  <div className="icon-box position-absolute d-flex flex-column justify-content-end  ">
                    <div className="icon-img p-2   ">
                      <FaRegEye size={20} />
                    </div>
                    <div className="icon-img p-2 ">
                      <FaHeart size={20} />
                    </div>
                  </div>
                  <img src={item.image} class="card-img-top w-100" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title fw-normal text-uppercase ">
                      {item.Name}
                    </h5>
                    <p class="card-text color-custom">{item.price}$</p>
                    <div class="text-center">
                      <a
                        href="#"
                        class="btn btn-primary add-btn  text-align-center  "
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-outline-dark shop-btn ">
              Show More
            </button>
          </div>
        </div>
        <div className="right-section  ml-5 ">
          <div className="products-heading py-2 d-flex justify-content-between p-1 rounded ">
            <h2 className="px-1 fs-6 text-uppercase ">our Testmonial</h2>
          </div>
          <div className="testmonial-card d-flex flex-column align-items-center w-100 mb-4 bg-light ">
            <div className="d-flex flex-column align-items-center border border-light p-2  bg-white">
              <img src={testmpnial} className="py-3"></img>
              <h3 className="mt-2 fs-md-5">Maryam Darouich</h3>
              <h3 className="mt-2 fs-6 ">Special Customer</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, architecto!
              </p>
            </div>
          </div>
          <div className="contact bg-light p-4 text-center ">
            <h1 className="mt-2 fs-5 text-center">News Latter</h1>
            <p>join our malling list </p>
            <input
              className="w-100 p-2 custom-input "
              placeholder="Email"
              type="text"
            />
            <br />
            <button className="btn  add-btn mt-2">Subscribe</button>
            <div className="icons d-flex justify-content-center mt-3 w-100 ">
              <div className="icon m-2">
                <FaInstagram className="custom-icon" size={23} />
              </div>
              <div className="icon m-2">
                <CiFacebook className="custom-icon" size={23} />
              </div>
              <div className="icon m-2">
                <FaSquareXTwitter className="custom-icon" size={23} />
              </div>
              <div className="icon m-2">
                <FaLinkedin className="custom-icon" size={23} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner mt-5 px-lg-5 container-fluid d-flex justify-content-center justify-content-lg-between ">
        <div className="left-box  d-none d-lg-block  ">
          <div className="mb-3 w-100">
            <img src={ads1} className="" />
          </div>
          <div className="w-100">
            <img src={ads2} className="" />
          </div>
        </div>
        <div className="right-box  ">
          <div className="top d-flex justify-content-between">
            <img
              style={{ width: "65%" }}
              src={ads3}
              className="mb-3 top-img "
            />
            <img
              style={{ width: "25%" }}
              src={ads4}
              className="mb-3 top-banner-img"
            />
          </div>
          <div>
            <img src={ads5} className="w-100 bottom-banner-img" />
          </div>
        </div>
      </div>
      <div className="category container-fluid  mt-5 px-5 mb-5">
        <div className="d-flex gap-2 justify-content-between  flex-wrap">
          <div className="box  p-2 bg-light">
            <h2 className="fs-5 text-dark">New Product</h2>
            {newProducts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="d-flex bg-white justify-content-between mb-1"
                >
                  <div className="w-100 d-flex justify-content-between">
                    <div style={{ width: "35%" }} className="img">
                      <img src={item.image} className="w-100" alt={item.Name} />
                    </div>
                    <div style={{ width: "63%" }} className="info p-2">
                      <h4 className="fs-5 text-secondary">{item.Name}</h4>
                      <span className="fw-bold">{item.price}$</span>
                      <div className="d-flex justify-content-center">
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaHeart size={20} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaRegEye size={20} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaShoppingCart className="bg-light" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box  p-2 bg-light">
            <h2 className="fs-5 text-dark">Featured Product</h2>
            {featureProducts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="d-flex bg-white justify-content-between mb-1"
                >
                  <div className="w-100 d-flex justify-content-between">
                    <div style={{ width: "35%" }} className="img">
                      <img src={item.image} className="w-100" alt={item.Name} />
                    </div>
                    <div style={{ width: "63%" }} className="info p-2">
                      <h4 className="fs-5 text-secondary">{item.Name}</h4>
                      <span className="fw-bold">{item.price}$</span>
                      <div className="d-flex justify-content-center">
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaHeart size={20} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaRegEye size={20} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaShoppingCart className="bg-light" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box  p-2 bg-light">
            <h2 className="fs-5 text-dark">Top Product</h2>
            {topProducts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="d-flex bg-white justify-content-between mb-1"
                >
                  <div className="w-100 d-flex justify-content-between">
                    <div style={{ width: "35%" }} className="img">
                      <img src={item.image} className="w-100" alt={item.Name} />
                    </div>
                    <div style={{ width: "63%" }} className="info p-2">
                      <h4 className="fs-5 text-secondary">{item.Name}</h4>
                      <span className="fw-bold">{item.price}$</span>
                      <div className="d-flex justify-content-center">
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaHeart size={20} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaRegEye size={20} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-1 m-3 bg-light rounded border">
                          <FaShoppingCart className="bg-light" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProducts;
