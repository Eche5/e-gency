import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faTimes,
  faInfoCircle,
  faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";
import newIcon from "../assets/icons8-new-96.png";
import loggedInprofile from "../assets/icons8-admin-settings-male-96.png";
import profile from "../assets/icons8-edit-account-96.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";

function Footer() {
  const { auth } = useAuth();
  const id = auth?.foundUser?._id;
  return (
    <footer className=" fixed bottom-0 w-full bg-cyan-500 shadow-lg shadow-cyan-500/50 ">
      <nav className="bg-sky-50 flex justify-around">
        <NavLink to="/new">
          <FontAwesomeIcon
            icon={faSprayCanSparkles}
            className="bg-sky-50 p-1 cursor-pointer hover:transform hover:translate-y-[-15px] hover:scale-[1.03] transition duration-300 ease-in-out rounded-full laptop:h-20 laptop:w-20 desktop:h-20 desktop:w-20 "
          />
        </NavLink>

        <NavLink to="/">
          <FontAwesomeIcon
            icon={faHouse}
            className="bg-sky-50 p-1 cursor-pointer hover:transform hover:translate-y-[-15px] hover:scale-[1.03] transition duration-300 ease-in-out rounded-full laptop:h-20 laptop:w-20 desktop:h-20 desktop:w-20"
          />
        </NavLink>

        {!auth.accessToken && (
          <NavLink to="/register">
            <FontAwesomeIcon
              icon={faUser}
              className="bg-sky-50 p-1 cursor-pointer hover:transform hover:translate-y-[-15px] hover:scale-[1.03] transition duration-300 ease-in-out rounded-full laptop:h-20 laptop:w-20 desktop:h-20 desktop:w-20"
            />
          </NavLink>
        )}
        {auth?.accessToken && (
          <NavLink to={`${id}`}>
            <img
              src={loggedInprofile}
              alt="loggedInprofile"
              className="bg-sky-50 p-1 phone:w-8 iphone:w-8 small:w-8 cursor-pointer hover:transform hover:translate-y-[-15px] hover:scale-[1.03] transition duration-300 ease-in-out rounded-full laptop:h-20 laptop:w-20 desktop:h-20 desktop:w-20"
            />
          </NavLink>
        )}
      </nav>
    </footer>
  );
}

export default Footer;
