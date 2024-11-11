import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/cart.css";
import { IoIosClose } from "react-icons/io";
import { addToCart } from "./redux-toolkit/Cart/cartSlice";
const Cart = () => {
  const cartStore = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart w-100 text-center mt-5 container-fluid">
      {cartStore.items.length === 0 && (
        <>
          <p className="fs-5 fw-bold">Cart is empty</p>
          <Link to="/shop" className="text-decoration-none">
            <div className="d-flex justify-content-center mb-3">
              <button className="btn btn-outline-dark shop-btn">
                Shop Now
              </button>
            </div>
          </Link>
        </>
      )}

      <div className="cart-items w-100 h-100">
        {cartStore.items.length > 0 &&
          cartStore.items.map((item) => (
            <div
              key={item.id}
              className="cart-item mb-3 d-flex justify-content-start border border-2 border-secondary align-items-center w-100 h-100"
            >
              <div className="Cart-img w-25 h-100">
                <img
                  src={item.image}
                  alt=""
                  className="cart-item-image w-100 h-100"
                />
              </div>
              <div className="cart-item-info w-75 d-flex justify-content-start ms-3 align-items-center">
                <div className="cart-text">
                  <h4 className="fw-bold text-uppercase">{item.name}</h4>
                  <p className="fw-bold text-uppercase">{item.price}$</p>
                  <p className="fw-bold text-uppercase">{}</p>
                </div>
                <div className="item-quantity d-flex align-items-center ms-5">
                  <div className="button d-flex align-items-center justify-content-start w-50 bg-warning">
                    <button className="btn px-4 pb-2 border-0 d-flex align-items-center text-dark">
                      -
                    </button>
                    <input
                      value={item.quantity || 1}
                      className="border-0 outline-0 custom-input px-2 py-1 w-50"
                      readOnly
                    />
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="btn px-4 pb-2 border-0 d-flex align-items-center text-dark"
                    >
                      +
                    </button>
                  </div>
                  <IoIosClose
                    size={40}
                    className="ms-5 bg-danger text-white fs-6"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
