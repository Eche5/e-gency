import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function ResetPassword() {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [pwd, setPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const errRef = useRef();

  const [matchPwd, setMatchPwd] = useState("");

  const [success, setSuccess] = useState(false);

  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchFocus, setMatchFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(false);

  const [validPwd, setValidPwd] = useState(false);

  const [isLoading, setIssLoading] = useState("Reset Password");
  const [isRessettin, setIsResetting] = useState(false);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));

    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd, PWD_REGEX]);

  const param = useParams();
  const id = param.id;
  const token = param.token;

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const FORGOT_URL = `/resetpassword/${id}/${token}`;
    try {
      setIssLoading("Resetting Password...");
      setIsResetting(true);
      const response = await axios.patch(
        FORGOT_URL,
        JSON.stringify({ password: pwd, confirmPassword: matchPwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 200) setSuccess(true);
      setIssLoading("Reset Password");
      setIsResetting(false);
    } catch (error) {
      setSuccess(false);
      if (error.response.status === 401) {
        setErrMsg("You are Unauthorized to perform this action");
        setIssLoading("Reset Password");
        setIsResetting(false);
      } else if (error.response.status === 404) {
        setErrMsg("password cannot be the same as your previous password");
        setIssLoading("Reset Password");
        setIsResetting(false);
      } else {
        setErrMsg("please reset password, link expired");
        setIssLoading("Reset Password");
        setIsResetting(false);
      }
    }
  };
  return (
    <div
      className="
    flex flex-col justify-center items-center
   py-4 px-2
  "
    >
      <section className=" max-w-[620px] min-h-[400px]  p-8  bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        {!success && (
          <form className="flex flex-col pb-4 gap-4" onSubmit={onHandleSubmit}>
            <h1 className="text-5xl leading-5 mt-4 text-center mb-10">
              Reset Password
            </h1>

            <label htmlFor="password">
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className="text-[22px] p-1 rounded-full text-black  pl-4 phone:mb-6"
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />8 to 24 characters. Must
              include uppercase and<br></br> lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_pwd">
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              placeholder="Confirm Password"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className="text-[22px] p-1 rounded-full text-black  pl-4"
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              password Must match the first password input field.
            </p>
            <button className=" flex justify-center gap-2 border rounded-full border-transparent py-2 px-4 text-base font-medium bg-black text-white m-4">
              {isRessettin && <Spinner />} {isLoading}
            </button>
          </form>
        )}
        {success && (
          <NavLink className=" mt-32 font-black text-3xl">
            click here to Login
          </NavLink>
        )}
      </section>
    </div>
  );
}

export default ResetPassword;
