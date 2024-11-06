import React, { useState } from "react";
import "./css/signup.css";
import axios from "axios";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Navigate } from "react-router-dom";

const logo = `${process.env.PUBLIC_URL}/images/logo.webp`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isOk, setIsOk] = useState(false);
  const [flag, setFlag] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsOk(true);

    if (
      password.length < 8 ||
      password !== cPassword ||
      name === "" ||
      email === ""
    ) {
      setFlag(false);
      setErrorMsg("Please fill all fields correctly.");
      return;
    } else {
      setFlag(true);
    }

    if (flag) {
      localStorage.setItem("email", email);
      try {
        await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: cPassword,
        });
        setIsSubmitted(true);
      } catch (error) {
        setErrorMsg("Registration failed. Please try again.");
        console.log(error);
      }
    }
  }

  if (isSubmitted) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container-signup container-fluid d-flex align-items-center justify-content-center ">
      <form
        onSubmit={handleSubmit}
        className="login-form w-50 h-100 my-auto p-5 d-flex flex-column align-items-center"
      >
        <div className="text-center mb-5">
          <img src={logo} alt="logo" />
          <p className="mt-3 fw-bold text-secondary">Login into your account</p>
        </div>
        <div className="mb-2 w-75">
          <label htmlFor="exampleInputName1" className="form-label d-block">
            Name
          </label>
          <input
            type="text"
            className="form-control custom-signup-input"
            id="exampleInputName1"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="position-relative">
            <MdOutlineDriveFileRenameOutline
              size={38}
              className="me-2 text-white p-2 rounded rounded-start-0 custom-signup-position"
            />
            {name.length === 0 && isOk && (
              <p
                className="text-danger p-0 m-0"
                style={{ marginTop: "-3px", fontSize: "14px" }}
              >
                Name is required
              </p>
            )}
          </div>
        </div>
        <div className="mb-2 w-75">
          <label htmlFor="exampleInputEmail1" className="form-label d-block">
            Email address
          </label>
          <input
            type="email"
            className="form-control custom-signup-input"
            id="exampleInputEmail1"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="position-relative">
            <MdOutlineEmail
              size={38}
              className="me-2 text-white p-2 rounded rounded-start-0 custom-signup-position"
            />
            {email.length === 0 && isOk && (
              <p
                className="text-danger p-0 m-0"
                style={{ marginTop: "-3px", fontSize: "14px" }}
              >
                Email is required
              </p>
            )}
          </div>
        </div>
        <div className="mb-2 w-75">
          <label htmlFor="exampleInputPassword1" className="form-label d-block">
            Password
          </label>
          <input
            type="password"
            className="form-control custom-signup-input"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="position-relative">
            <RiLockPasswordLine
              size={38}
              className="me-2 text-white p-2 rounded rounded-start-0 custom-signup-position"
            />
            {password.length < 8 && isOk && (
              <p
                className="text-danger p-0 m-0"
                style={{ marginTop: "-3px", fontSize: "14px" }}
              >
                Password must be 8 characters long
              </p>
            )}
          </div>
        </div>
        <div className="mb-2 w-75">
          <label htmlFor="exampleInputPassword2" className="form-label d-block">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control custom-signup-input"
            id="exampleInputPassword2"
            placeholder="Repeat Your Password"
            onChange={(e) => setCPassword(e.target.value)}
          />
          <div className="position-relative">
            <RiLockPasswordLine
              size={38}
              className="me-2 text-white p-2 rounded rounded-start-0 custom-signup-position"
            />
            {cPassword !== password && isOk && (
              <p
                className="text-danger p-0 m-0"
                style={{ marginTop: "-3px", fontSize: "14px" }}
              >
                Passwords do not match
              </p>
            )}
          </div>
        </div>
        {errorMsg && (
          <div className="mb-2 w-75">
            <p className="text-danger">{errorMsg}</p>
          </div>
        )}
        <button type="submit" className="btn my-3 custom-btn btn-primary">
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
