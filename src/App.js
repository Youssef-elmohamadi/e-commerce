import Nav from "./components/Nav";
import {Route , Routes} from "react-router-dom";
import Home from "./components/Home";
import { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";
import TopOffer from "./components/TopOffer";
import SignUp from "./components/SignUp";
import HomeProducts from "./components/HomeProducts";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import {Provider } from "react-redux";
import ProductsContextProvider from "./components/ProductsContext";
import cartStore  from "./components/redux-toolkit/Cart/cartStore";
function App() {
  return (
    <Provider store={cartStore}>
    <AuthProvider>
      <ProductsContextProvider>
    <>
    <Routes>
      <Route path="/" element={<> <TopOffer/> <Nav/> <Home/> <HomeProducts/> <Footer /> </>}/>
      <Route path="/shop" element ={<> <Nav/> <Shop /> <Footer /> </>}/>
      <Route path="/cart" element={<> <Nav/> <Cart/> <Footer /> </>}/>
      <Route path="/about" element={<> <Nav/> <About/> <Footer /> </>}/>
      <Route path="/contact" element={<> <Nav/> <Contact/> <Footer /> </>}/>
      <Route path="/login" element={<> <Nav/> <Login/> </>}/>
      <Route path="/signup" element={<>  <Nav/> <SignUp/></>}/>
    </Routes>
    </>
    </ProductsContextProvider>
    </AuthProvider>
    </Provider>
  );
}

export default App;
