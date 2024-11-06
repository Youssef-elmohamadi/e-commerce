import { useState, createContext, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setAuthentication(true);
    }
    if (localStorage.getItem("email")) {
      setUserEmail(localStorage.getItem("email"));
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authentication,
        setAuthentication,
        userEmail,
        setUserEmail,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
