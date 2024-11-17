import React from "react";
import "./css/contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact d-flex justify-content-center align-items-center h-100 ">
        <div className="contact-container p-4 px-5 rounded shadow my-5 d-flex align-items-center flex-column gap-2">
          <h1 className="fw-bold text-uppercase fs-4">contact us</h1>

          {/** Form Fields */}
          <div className="mb-3 row">
            <label
              htmlFor="name"
              className="col-3 col-md-4 text-start col-form-label"
            >
              Name
            </label>
            <div className="col-9 col-md-8">
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="email"
              className="col-3 col-md-4 text-start col-form-label"
            >
              E-mail
            </label>
            <div className="col-9 col-md-8">
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="subject"
              className="col-3 col-md-4 text-start col-form-label"
            >
              Subject
            </label>
            <div className="col-9 col-md-8">
              <input type="text" className="form-control" id="subject" />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="message"
              className="col-3 col-md-4 text-start col-form-label"
            >
              Message
            </label>
            <div className="col-9 col-md-8">
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/** Submit Button */}
          <div className="mb-3 align-self-start ms-3 row">
            <button className="btn btn-primary fw-bold send-button">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
