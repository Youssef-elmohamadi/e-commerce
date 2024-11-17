import React, { useState, useEffect, useContext } from "react";
import { FaRegEye, FaHeart } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import "./css/shop.css";
import { ProductsContext } from "./ProductsContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux-toolkit/Cart/cartSlice";

const Shop = () => {
  const toggleCategorySide = () => {
    document.querySelector(".left-shop-box").classList.toggle("show-icon");
  };
  const MySwal = withReactContent(Swal);

  const [showCategory, setShowCategory] = useState(false);

  const cartStore = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added to cart",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const { shop, categoryFilter, allCat } = useContext(ProductsContext);
  return (
    <>
      <div className="shop-container container-fluid px-4 mt-4 mb-5 ">
        <h2 class="shop-heading fs-3 fw-bold text-uppercase text-secondary  ">
          # shop
        </h2>
        <p className="fw-bold text-secondary fs-4">Home.Shop</p>
        <MdCategory
          onClick={toggleCategorySide}
          size={40}
          className="me-2 category-icon bg-warning rounded position-fixed mt- z-3 p-2    "
        />
        <div class=" d-flex  justify-content-between  ">
          <div class="left-shop-box d-flex  flex-column   w-25">
            <div className="cat  px-3 rounded w-100 position-sticky top-0 bg-white  ">
              <h3 className="text-uppercase w-100 mb-0 bg-light rounded  p-3 fs-5 fw-bold">
                All Categories
              </h3>
              <div className="shop-list py-2 w-100 border border-4 border-light rounded px-2 fw-bold text-secondary  ">
                <li
                  onClick={allCat}
                  className="text-uppercase list-unstyled px-2 bg-white  letter-space-1 pt-1 "
                >
                  # all
                </li>
                <li
                  onClick={() => {
                    categoryFilter("tv");
                  }}
                  className="text-uppercase list-unstyled px-2 bg-white  letter-space-1 pt-1 "
                >
                  # tv
                </li>
                <li
                  onClick={() => {
                    categoryFilter("laptop");
                  }}
                  className="text-uppercase list-unstyled px-2 bg-white letter-spacing pt-1   "
                >
                  # laptop
                </li>
                <li
                  onClick={() => {
                    categoryFilter("watch");
                  }}
                  className="text-uppercase list-unstyled px-2 bg-white letter-spacing pt-1   "
                >
                  # watch
                </li>
                <li
                  onClick={() => {
                    categoryFilter("speaker");
                  }}
                  className="text-uppercase list-unstyled px-2 bg-white letter-spacing pt-1   "
                >
                  # speaker
                </li>
                <li
                  onClick={() => {
                    categoryFilter("electronics");
                  }}
                  className="text-uppercase list-unstyled px-2 bg-white letter-spacing pt-1   "
                >
                  # electronics
                </li>
                <li
                  onClick={() => {
                    categoryFilter("headphones");
                  }}
                  className="text-uppercase list-unstyled px-2 bg-white letter-spacing pt-1   "
                >
                  # headphones
                </li>
                <li
                  onClick={() => {
                    categoryFilter("phone");
                  }}
                  className="text-uppercase list-unstyled px-2 bg-white letter-spacing pt-1   "
                >
                  # phone
                </li>
              </div>
            </div>
            <div className="shop-ads d-none d-lg-block px-3">
              <img src="images/shop_left.avif" className="w-100  mt-4" alt="" />
            </div>
          </div>
          <div class="right-shop-box  w-75">
            <div className="shop-banner w-100  ">
              <img src={`images/shop_top.webp`} alt="" className="w-100" />
            </div>
            <div className="products-card d-flex flex-wrap w-100 mb-4">
              {shop.map((item) => {
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
                    <img
                      src={item.image}
                      class="card-img-top w-100"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title fw-normal text-uppercase ">
                        {item.Name}
                      </h5>
                      <p class="card-text color-custom">{item.price}$</p>
                      <div class="text-center">
                        <a
                          href="#"
                          class="btn btn-primary add-btn  text-align-center  "
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
