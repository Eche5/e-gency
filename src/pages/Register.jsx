import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import Spinner from "../components/Spinner";

function Register() {
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const errRef = useRef();
  const firstNameRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [validName, setValidName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isSigningUp, setisSigningUp] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");

  const [phonenumber, setPhonenumber] = useState("");
  const [validPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [phonenumberFocus, setPhonenumberFocus] = useState(false);

  const isValidName = firstname.length > 4;
  const isValidLastName = lastname.length > 4;
  const isValidPhoneNumber = phonenumber.length === 11;
  useEffect(() => {
    if (isValidName) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }, [isValidName]);

  useEffect(() => {
    if (isValidLastName) {
      setValidLastName(true);
    } else {
      setValidLastName(false);
    }
  }, [isValidLastName]);

  useEffect(() => {
    if (isValidPhoneNumber) {
      setIsValidPhoneNumber(true);
    } else {
      setIsValidPhoneNumber(false);
    }
  }, [isValidPhoneNumber]);

  useEffect(() => {
    document.title = "e-rent | Register ";
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email, EMAIL_REGEX]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd, PWD_REGEX]);

  useEffect(() => {
    setErrMsg("");
  }, [firstname, pwd, matchPwd]);

  const REGISTER_URL = "/register";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    const phone = phonenumber.toString();
    const userData = {
      email,
      firstname,
      phonenumber: phone,
      lastname,
      password: pwd,
      confirmPassword: matchPwd,
    };
    try {
      setIsAuthenticating(true);
      setisSigningUp("Creating your account...");
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify(userData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      setisSigningUp("Sign Up");
    } catch (error) {
      if (error.response.status === 403);
      setErrMsg(error.response.data.message);
      setIsAuthenticating(false);
      setisSigningUp("Sign Up");
    }
  };
  return (
    <div
      className="
    flex flex-col justify-center items-center
  "
      id="homepage"
    >
      <section className="w-full max-w-[420px] mb-20   p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="text-5xl leading-5 mt-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col pb-4">
          {/* //firstname */}
          <label htmlFor="firstname" className="mt-4">
            First Name
            <FontAwesomeIcon
              icon={faCheck}
              className={validName ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validName || !firstname ? "hide" : "invalid"}
            />
          </label>
          <input
            type="text"
            id="firstname"
            ref={firstNameRef}
            autoComplete="off"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
            className="text-[22px] p-1 rounded-full text-black  pl-4"
          />
          <p
            id="uidnote"
            className={
              firstNameFocus && firstname && !validName
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
          </p>
          {/* //lastname */}
          <label htmlFor="lastname" className="mt-4">
            Last Name
            <FontAwesomeIcon
              icon={faCheck}
              className={validLastName ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validLastName || !lastname ? "hide" : "invalid"}
            />
          </label>
          <input
            type="text"
            id="lastname"
            autoComplete="off"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            required
            aria-invalid={validLastName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setLastNameFocus(true)}
            onBlur={() => setLastNameFocus(false)}
            className="text-[22px] p-1 rounded-full text-black  pl-4"
          />
          <p
            id="uidnote"
            className={
              lastNameFocus && lastname && !validLastName
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
          </p>
          {/* //email */}
          <label htmlFor="username" className="mt-4">
            Email
            <FontAwesomeIcon
              icon={faCheck}
              className={validEmail ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validEmail || !email ? "hide" : "invalid"}
            />
          </label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className="text-[22px] p-1 rounded-full text-black  pl-4"
          />
          <p
            id="uidnote"
            className={
              emailFocus && email && !validEmail ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          {/* //phonenumber */}
          <label htmlFor="phonenumber" className="mt-4">
            phone Number
            <FontAwesomeIcon
              icon={faCheck}
              className={validPhoneNumber ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validPhoneNumber || !phonenumber ? "hide" : "invalid"}
            />
          </label>
          <input
            type="number"
            id="phonenumber"
            autoComplete="off"
            onChange={(e) => setPhonenumber(e.target.value)}
            value={phonenumber}
            required
            aria-invalid={validPhoneNumber ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setPhonenumberFocus(true)}
            onBlur={() => setPhonenumberFocus(false)}
            className="text-[22px] p-1 rounded-full text-black  pl-4"
          />
          <p
            id="uidnote"
            className={
              phonenumberFocus && phonenumber && !validPhoneNumber
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            11 digits.
            <br />
            Must be numbers.
            <br />
          </p>
          {/* //password */}
          <label htmlFor="password">
            Password:
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
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            className="text-[22px] p-1 rounded-full text-black  pl-4"
          />
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
          <label htmlFor="confirm_pwd">
            Confirm Password:
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
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
          <button
            disabled={!validName || !validPwd || !validMatch ? true : false}
            className={
              validMatch
                ? `border rounded-full border-transparent py-2 px-4 text-base font-medium ${
                    isAuthenticating
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gray-900 hover:bg-green-700"
                  } hover:border-gray-400 transition duration-250 ease-in-out mt-4`
                : "cursor-not-allowed border rounded-full border-transparent py-2 px-4 text-base font-medium bg-gray-900 hover:border-gray-400 transition duration-250 ease-in-out mt-4"
            }
          >
            <div className=" flex justify-center gap-4">
              {isSigningUp} {isAuthenticating && <Spinner />}
            </div>
          </button>
        </form>
        <p className=" text-center">Already have an account</p>
        <NavLink to="/login">
          <p className="text-center text-2xl text-white"> Login</p>
        </NavLink>
      </section>
    </div>
  );
}

export default Register;
