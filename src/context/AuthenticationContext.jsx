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
      const response = await axiosPrivate.patch(
        UPDATE_URL,
        JSON.stringify(userData),
        {
          withCredentials: true,
        }
      );
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
    }
  };
  const GoogleLogin = async ({ email, token }) => {
    setIsLoggedIn(false);
    try {
      const GOOGLE_URL = `/googleauth`;

      const response = await axios.get(GOOGLE_URL, {
        params: { email, token }, // Pass email as a query parameter
        withCredentials: true,
      });

      const accessToken = response?.data?.accessToken;
      const foundUser = response?.data?.user;
      setAuth({ foundUser, accessToken });
      if (foundUser) setIsLoggedIn(true);
      setSuccess(true);
    } catch (error) {
      setIsLoggedIn(false);
      setErrMsg(error?.response?.data?.message);
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
        GoogleLogin,
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
