import React from "react";
import { MdLocalShipping } from "react-icons/md";
import * as motion from "framer-motion/client";
import "./css/TopOffer.css";

const TopOffer = () => {
  return (
    <div className="container-fluid bg-light d-flex align-items-center overflow-hidden">
      <motion.p
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{
          duration: 25,
          type: "easeInOut",
          repeat: Infinity,
        }}
        className="mb-0 p-2 top-offer"
      >
        <MdLocalShipping size={20} className="me-2" />
        Free shipping if your order is $1000 or more
      </motion.p>
    </div>
  );
};

export default TopOffer;
