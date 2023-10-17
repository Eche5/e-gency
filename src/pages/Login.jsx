import { useState, useRef, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import visible from "../assets/icons8-visible-30.png";
import notvisible from "../assets/icons8-not-visible-30.png";
import axios from "../api/axios";
import { useAuth } from "../context/AuthenticationContext";
import Spinner from "../components/Spinner";
function Login() {
  const emailRef = useRef();

  const [showPassword, setShowPassword] = useState(false);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [isValid, setIsValid] = useState(false);

  const [email, setEmail] = useState("");

  const errRef = useRef();

  const [isLogin, setIssLoggingin] = useState("Log in");

  const [pwd, setPwd] = useState("");

  const LOGIN_URL = "/auth";

  const { setAuth, setErrMsg, errMsg } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //saves last inputed username
  useEffect(() => {
    const savedEmail = localStorage.getItem("lastEmail");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIssLoggingin("Logging in...");

      setIsAuthenticating(true);

      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;

      const foundUser = response?.data?.user;

      setAuth({ foundUser, accessToken });

      localStorage.setItem("lastUsername", email);

      setIssLoggingin("Log in");

      setEmail("");

      setPwd("");

      navigate(from, { replace: true });
    } catch (err) {
      if (err.response.status === 400) {
        setErrMsg(err.response.data.message);

        setIssLoggingin("Log in");

        setIsAuthenticating(false);
      } else if (err.response.status === 401) {
        setErrMsg(err.response.data.message);

        setIssLoggingin("Log in");

        setIsAuthenticating(false);
      } else {
        setErrMsg("No Server Response");

        setIssLoggingin("Log in");

        setIsAuthenticating(false);
      }

      errRef.current.focus();
    }
  };

  const inputType = showPassword ? "text" : "password";

  useEffect(() => {
    document.title = "e-rent | Login ";
  }, []);

  useEffect(() => {
    if (email.length >= 4 && email.includes("@") && pwd.length >= 4) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, pwd]);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, setErrMsg]);
  //google auth

  const handleCallbackResponse = (response) => {
    const userObject = jwt_decode(response.credential);

    const token = response.credential;

    const email = userObject.email;

    GoogleLogin({ email, token });
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "924812526298-trlat91td4e9d846nrrhc34edequm7rv.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      shape: "pill",
    });
  }, []);

  //Google Login
  const GoogleLogin = async ({ email, token }) => {
    try {
      const GOOGLE_URL = `/googleauth`;

      const response = await axios.get(GOOGLE_URL, {
        params: { email, token }, // Pass email as a query parameter
        withCredentials: true,
      });

      const accessToken = response?.data?.accessToken;

      const foundUser = response?.data?.user;

      setAuth({ foundUser, accessToken });

      navigate("/");
    } catch (error) {
      setErrMsg(error?.response?.data?.message);
    }
  };

  return (
    <div
      className="
    flex flex-col justify-center items-center
   py-4 px-2
  "
      id="loginpage"
    >
      <section className="w-full max-w-[420px] min-h-[400px]  p-8  bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="text-5xl leading-5 mt-4 text-center mb-20">Welcome</h1>
        <form onSubmit={onHandleSubmit} className="flex flex-col pb-4">
          <div className=" flex bg-white text-[1.2rem] p-1 rounded-full text-black mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="w-8 h-8 p-1"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <input
              id="email"
              type="text"
              onChange={(e) => setEmail(e.target.value.trim())}
              value={email}
              placeholder="Email address"
              className="pl-4"
              required
              ref={emailRef}
            />
          </div>

          <div className="flex justify-between p-1 text-[1.2rem]  border-l-2  bg-white rounded-full text-black shadow-lg border-2 border-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="w-8 h-8 p-1 "
            >
              <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
            </svg>
            <input
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              className="pl-4 w-full"
              placeholder="Login Password"
              type={inputType}
            />
            {showPassword ? (
              <img
                src={visible}
                onClick={togglePasswordVisibility}
                className="cursor-pointer w-8 h-8 p-1"
              />
            ) : (
              <img
                src={notvisible}
                onClick={togglePasswordVisibility}
                className="cursor-pointer w-8 h-8 p-1"
              />
            )}
          </div>

          <button
            disabled={!isValid || isAuthenticating}
            type="submit"
            className={
              isValid
                ? `border rounded-full border-transparent py-2 px-4 text-base font-medium ${
                    isAuthenticating
                      ? "bg-gray-400 cursor-not-allowed rounded-full"
                      : "bg-gray-900 hover:bg-green-700 rounded-full"
                  } hover:border-gray-400 transition duration-250 ease-in-out mt-4`
                : "cursor-not-allowed border rounded-full border-transparent py-2 px-4 text-base font-medium bg-gray-900 hover:border-gray-400 transition duration-250 ease-in-out mt-4"
            }
          >
            <div className="flex justify-center gap-4">
              {isLogin}
              {isAuthenticating && <Spinner />}
            </div>
          </button>
          <p className=" text-center font-bold">OR</p>
          <div
            id="signInDiv"
            className=" flex  justify-center p-2 rounded-full"
          ></div>
        </form>
        <p className=" text-center">Don&apos;t have an account</p>
        <NavLink to="/register">
          <p className="text-center text-2xl text-gray-800 hover:underline">
            Sign up
          </p>
        </NavLink>
      </section>
    </div>
  );
}

export default Login;
