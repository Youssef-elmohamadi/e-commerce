import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/cart.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import {
  calculateTotal,
  addToCart,
  removeFromCart,
} from "./redux-toolkit/Cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => state.cart);

  // حساب الإجمالي عند تغيير العربة
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartStore.items, dispatch]);

  console.log(cartStore);

  return (
    <div className="cart mt-5 container-fluid">
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

      <div className="cart-items mb-3 container">
        {cartStore.items.length > 0 &&
          cartStore.items.map((item) => (
            <div
              key={item.id}
              className="cart-item border rounded p-3 my-3 row"
            >
              <div className="cart-item-left d-flex justify-content-center align-items-center row col-md-6 col-12">
                <div className="cart-item-img row align-self-center col-4 col-md-7">
                  <img src={item.image} alt="" className="col-md-6 col-12" />
                </div>
                <div className="cart-item-info text-md-start text-center col-12 col-md-5">
                  <h3 className="mb-1 text-secondary">{item.category}</h3>
                  <h2>{item.name}</h2>
                  <p className="mb-1 text-secondary">PRICE: ${item.price}</p>
                  <p className="mb-1 text-secondary">
                    TOTAL: ${item.totalPrice}
                  </p>
                </div>
              </div>
              <div className="cart-item-right col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className="cart-buttons p-1 d-flex align-items-center">
                  <button
                    className="btn btn-danger d-flex align-items-center"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <FaPlus size={10} />
                  </button>
                  <input
                    type="text"
                    className="p-1 border-0"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="btn btn-danger d-flex align-items-center"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <FaMinus size={10} />
                  </button>
                </div>
                <button className="btn delete-btn ms-3 d-flex align-items-center justify-content-center p-2">
                  <HiOutlineX size={25} className="p-1" />
                </button>
              </div>
            </div>
          ))}
        {cartStore.items.length > 0 && (
          <>
            <div >
              <p className="fs-5 text-uppercase">
                Sub Total: ${cartStore.totalPrice}
              </p>
              <button style={{background: "#ce1e77"}} className="btn btn-danger">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
