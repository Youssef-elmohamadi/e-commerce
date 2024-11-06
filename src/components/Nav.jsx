import { React, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/header.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "./AuthContext";
import { CiLogout } from "react-icons/ci";

const logo = `${process.env.PUBLIC_URL}/images/logo.webp`;

const Nav = () => {
  const checkAuth = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("email");
    checkAuth.setAuthentication(false);
    checkAuth.setUserEmail(null);
  };
  return (
    <>
      <nav className="navbar navbar-light  mt-0">
        <div className="container-fluid px-md-5 px-3 w-100">
          <a href="#" className="navbar-brand">
            <img className="logo w-50 w-lg-75 " src={logo} alt="" />
          </a>
          <form className="d-md-flex position-relative d-none">
            <input
              className="form-control me-2 h-100 input-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-transparent btn-outline-transparent d-flex align-items-center search-btn position-absolute top-50 start-100 rounded-0 rounded-end translate-middle"
              type="submit"
            >
              <CiSearch size={20} className="me-2" />
            </button>
          </form>

          {!checkAuth.authentication ? (
            <>
              <Link
                to={"/login"}
                className="control-button text-decoration-none text-dark"
              >
                <MdOutlineLogin size={20} className="me-2" />
                Login
              </Link>
            </>
          ) : (
            <Link
              to={"/login"}
              className="control-button text-decoration-none text-dark"
              onClick={logout}
            >
              <CiLogout size={20} className="me-2" />
              Logout
            </Link>
          )}
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid d- flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaUser size={20} className="me-2 text-white" />
            <div className="info text-white ">
              {checkAuth.authentication ? (
                <p className="mb-0">{checkAuth.userEmail}</p>
              ) : (
                <p className="mb-0">Guest</p>
              )}
            </div>
          </div>
          <button
            className="navbar-toggler nav-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link text-white" href="#">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link text-white" href="#">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-white" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-white" href="#">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="offers d-none d-lg-block  ">
            <div>
              <p className="mb-0 bg-warning p-2 rounded">
                Flat 10% offer for all iphones
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
