import React from "react";
import { LuBaggageClaim } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import "./css/footer.css";
const logo = `${process.env.PUBLIC_URL}/images/logo.webp`;

const Footer = () => {
  return (
    <>
      <div className="container-fluid d-flex w-100 footer bg-light px-2 px-md-5 py-5">
        <div className="left-footer-box ">
          <div className="small-box d-flex  align-items-center p-2">
            <div className="footer-icon me-3 mb-1">
              <LuBaggageClaim color="#ce1e77" size={30} className="me-2 mb-2" />
            </div>
            <div className="footer-info">
              <h3
                style={{ color: "#ce1e77" }}
                className="text-uppercase fs-5 fw-bold mb-1 "
              >
                Free Delivery
              </h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="small-box d-flex align-items-center p-2">
            <div className="footer-icon me-3 mb-1">
              <FaShippingFast color="#ce1e77" size={30} className="me-2 mb-2" />
            </div>
            <div className="footer-info">
              <h3
                style={{ color: "#ce1e77" }}
                className="text-uppercase fs-5 fw-bold mb-1 "
              >
                Free Delivery
              </h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="small-box d-flex align-items-center p-2 ">
            <div className="footer-icon me-3 mb-1 ">
              <FaHeadphonesSimple
                color="#ce1e77"
                size={30}
                className="me-2 mb-2"
              />
            </div>
            <div className="footer-info">
              <h3
                style={{ color: "#ce1e77" }}
                className="text-uppercase fs-5 fw-bold mb-1 "
              >
                Free Delivery
              </h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="small-box d-flex align-items-center p-2 ">
            <div className="footer-icon me-3 mb-1 ">
              <GiWallet color="#ce1e77" size={30} className="me-2 mb-2" />
            </div>
            <div className="footer-info">
              <h3
                style={{ color: "#ce1e77" }}
                className="text-uppercase fs-5 fw-bold mb-1 "
              >
                Free Delivery
              </h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="right-footer-box  ">
          <div className="d-flex justify-content-center align-items-center">
            <img src={logo} alt="" />
          </div>
          <div className="paragraph mb-5">
            <p className="mt-3  mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              beatae, provident molestias porro, alias facere accusamus
              veritatis soluta
            </p>
          </div>
          <div className="lists d-flex justify-content-between flex-wrap  ">
            <div className="list">
              <h2 className="text-uppercase fw-bold fs-5 text-dark">
                your account
              </h2>
              <ul className="list-unstyled">
                <li className="text-secondary text-capitalize mb-1">
                  about us
                </li>
                <li className="text-secondary text-capitalize mb-1">account</li>
                <li className="text-secondary text-capitalize mb-1">payment</li>
                <li className="text-secondary text-capitalize mb-1">sales</li>
              </ul>
            </div>
            <div className="list">
              <h2 className="text-uppercase fw-bold fs-5 text-dark">
                products
              </h2>
              <ul className="list-unstyled">
                <li className="text-secondary text-capitalize mb-1">
                  delivery
                </li>
                <li className="text-secondary text-capitalize mb-1">
                  track order
                </li>
                <li className="text-secondary text-capitalize mb-1">
                  new products
                </li>
                <li className="text-secondary text-capitalize mb-1">
                  old products
                </li>
              </ul>
            </div>
            <div className="list">
              <h2 className="text-uppercase fw-bold fs-5 text-dark">
                contact us
              </h2>
              <ul className="list-unstyled">
                <li className="text-secondary text-capitalize mb-1">
                  4005, silver business point india
                </li>
                <li className="text-secondary text-capitalize mb-1">
                  +(012)99999999
                </li>
                <li className="text-secondary text-capitalize mb-1">
                  info@Gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
