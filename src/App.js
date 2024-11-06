import Nav from "./components/Nav";
import {Route , Routes} from "react-router-dom";
import Home from "./components/Home";
import { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";
import TopOffer from "./components/TopOffer";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import HomeProducts from "./components/HomeProducts";
import Footer from "./components/Footer";
function App() {
  return (
    <AuthProvider>
    <>
    <Routes>
      <Route path="/" element={<> <TopOffer/> <Nav/> <Home/> <HomeProducts/> <Footer /> </>}/>
      <Route path="/login" element={<> <Nav/> <Login/> </>}/>
      <Route path="/signup" element={<>  <Nav/> <SignUp/></>}/>
    </Routes>
    </>
    </AuthProvider>
  );
}

export default App;
