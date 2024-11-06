import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { authentication } = useContext(AuthContext);
  return authentication ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
