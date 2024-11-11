import { createContext, useEffect, useState } from "react";
import homeProduct from "../home_product.js";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(homeProduct);
  const [shop, setShop] = useState(homeProduct);
  const filter = (x) => {
    if (x === "new") {
      setProducts(homeProduct.filter((item) => item.type === "new"));
    } else if (x === "featured") {
      setProducts(homeProduct.filter((item) => item.type === "featured"));
    } else if (x === "top") {
      setProducts(homeProduct.filter((item) => item.type === "top"));
    } else if (x === "all") {
      setProducts(homeProduct);
    }
  };
  //xxxxxxxxxxxxx Category Filter xxxxxxxxxxxx
  const categoryFilter = (x) => {
    const catFilter = homeProduct.filter((item) => {
      return item.cat === x;
    });
    setShop(catFilter);
  };
  const allCat = () => {
    setShop(homeProduct);
  };
  return (
    <ProductsContext.Provider value={{ products, filter , shop, categoryFilter, allCat }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
