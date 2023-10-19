import { createContext, createRef, useContext, useState } from "react";
import axios, { axiosPrivate } from "../api/axios";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [firstname, setFirstname] = useState(auth?.foundUser?.firstname || "");

  const [success, setSuccess] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [lastname, setLastname] = useState(auth?.foundUser?.lastname || "");

  const [email, setEmail] = useState(auth?.foundUser?.email || "");

  const [mtchPwd, setMatchPwd] = useState("");

  const headerRef = createRef();

  const updateMe = async (id) => {
    try {
      const UPDATE_URL = `/${id}`;

      const userData = { firstname, lastname, email, confirmPassword: mtchPwd };

      await axiosPrivate.patch(UPDATE_URL, JSON.stringify(userData), {
        withCredentials: true,
      });

      setSuccess(true);
    } catch (error) {
      setSuccess(false);
    }
  };

  return (
    <authContext.Provider
      value={{
        auth,
        setAuth,
        success,
        setFirstname,
        setLastname,
        setMatchPwd,
        setEmail,
        updateMe,
        setErrMsg,
        isLoggedIn,
        errMsg,
        headerRef,
        firstname,
        lastname,
        email,
        mtchPwd,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export { useAuth, AuthProvider };
