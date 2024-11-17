import { React, useContext, useEffect } from "react";
import "./css/login.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
const loginImage = `${process.env.PUBLIC_URL}/images/Mobile login-pana 1.png`;
const logo = `${process.env.PUBLIC_URL}/images/logo.webp`;

const Login = () => {
  const { setAuthentication, setUser, setUserEmail, userEmail } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOk, setIsOk] = useState(false);
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsOk(true);
    try {
      await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      setIsOk(true);
      localStorage.setItem("email", email);
      setAuthentication(true);
      setUserEmail(email);
      Navigate("/", { replace: true });
    } catch (error) {
      setIsOk(false);
      setError(error.response.data.message);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (userEmail) {
      navigate("/");
    }
  }, [userEmail]);

  return (
    <>
      <div className="container-login row overflow-hidden g-0 ">
        <form
          onSubmit={handleSubmit}
          className="login-form col-md-6 col-12 h-100 my-auto p-5 shadow d-flex flex-column align-items-center "
        >
          <div className="text-center mb-5 ">
            <img src={logo} alt="" />
            <p class="mt-3 fw-bold text-secondary">Login into your account</p>
          </div>
          <div class="mb-3 w-75 ">
            <label for="exampleInputEmail1" class="form-label d-block">
              Email address
            </label>
            <input
              type="email"
              class="form-control custom-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div class="position-relative">
              <MdOutlineEmail
                size={38}
                className="me-2 text-white p-2  rounded rounded-start-0 custom-position"
              />
            </div>
          </div>
          <div class="mb-3 w-75">
            <label for="exampleInputPassword1" class="form-label d-block">
              Password
            </label>
            <input
              type="password"
              class="form-control custom-input"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div class="position-relative">
              <RiLockPasswordLine
                size={38}
                className="me-2 text-white p-2 rounded rounded-start-0 custom-position"
              />
            </div>
          </div>

          <div class="forget-password d-flex justify-content-end">
            <a href="#" class=" text-decoration-none  ">
              Forgot Password?
            </a>
          </div>
          {error && (
            <div className="mb-2 w-75">
              <p className="text-danger">{error}</p>
            </div>
          )}
          <button type="submit" class="btn my-3 custom-btn w-75 btn-primary">
            Login Now
          </button>
          <div class="text-center mt-3">
            <div class="row">
              <div class="col">
                <hr />
              </div>
              <div class="col-auto text-secondary text-center">or</div>
              <div class="col">
                <hr />
              </div>
            </div>
          </div>

          <Link
            to="/signup"
            className="btn my-3 custom-btn w-75 btn-primary text-decoration-none text-white"
          >
            Sign Up
          </Link>
        </form>
        <div class="login-img col-md-6 col-0 d-flex justify-content-center align-items-center bg-light">
          <img className="w-75" src={loginImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
