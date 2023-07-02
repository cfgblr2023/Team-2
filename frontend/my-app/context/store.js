import { register_user, validateUserDetails } from "@/utils";
import React, { useEffect, useState } from "react";

const GLOBAL_CONTEXT = React.createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState({
    _isAuthenticated: false,
  });

  const authenticate_user = async () => {
    let res = await register_user(user);
    if (res.token) {
      localStorage.setItem("token", res.token);
      setUser({ ...user, _isAuthenticated: true });
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
    }
  }, []);
  return (
    <GLOBAL_CONTEXT.Provider value={{ user, setUser, authenticate_user }}>
      {children}
    </GLOBAL_CONTEXT.Provider>
  );
};

export default GLOBAL_CONTEXT;