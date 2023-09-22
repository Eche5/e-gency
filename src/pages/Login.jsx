import { useState, useRef, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
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
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();
  const [isLogin, setIssLoggingin] = useState("Log in");

  const [pwd, setPwd] = useState("");
  const LOGIN_URL = "/auth";
  const { auth, setAuth } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
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
      console.log(err);
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
        <h1 className="text-5xl leading-5 mt-4">Sign In</h1>
        <form onSubmit={onHandleSubmit} className="flex flex-col pb-4">
          <label htmlFor="email" className="mt-4">
            Email-address
          </label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value.trim())}
            value={email}
            placeholder="Email"
            required
            ref={emailRef}
            className="text-[22px] p-1 rounded-full text-black  pl-4"
          />
          <label htmlFor="password" className="mt-4">
            Password
          </label>
          <div className=" flex justify-between border-l-2 bg-white rounded-full shadow-lg border-2 border-gray-800">
            <input
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              placeholder="Login Password"
              type={inputType}
              className="text-[22px] p-1  text-black rounded-l-[9999px] pl-4"
            />
            {showPassword && (
              <img
                src={visible}
                onClick={togglePasswordVisibility}
                className=" cursor-pointer w-8 h-8 m-1"
              />
            )}
            {!showPassword && (
              <img
                src={notvisible}
                onClick={togglePasswordVisibility}
                className=" cursor-pointer w-8 h-8 m-1"
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
        </form>
        <p className=" text-center">Don&apos;t have an account</p>
        <NavLink to="/register">
          <p className="text-center text-2xl text-white"> Sign up</p>
        </NavLink>
      </section>
    </div>
  );
}

export default Login;
