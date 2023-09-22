import homeIcon from "../assets/icons8-home-96.png";
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
        <img
          src={newIcon}
          alt="new"
          className="bg-sky-50 p-1 cursor-pointer hover:transform hover:translate-y-[-15px] hover:scale-[1.03] transition duration-300 ease-in-out rounded-full h-24 w-24"
        />
        <NavLink to="/">
          <img
            src={homeIcon}
            alt="home"
            id="triangular-border"
            className="bg-sky-50 p-1 cursor-pointer hover:transform hover:translate-y-[-15px] hover:scale-[1.03] transition duration-300 ease-in-out rounded-t-full h-24 w-24"
          />
        </NavLink>

        {!auth.accessToken && (
          <NavLink to="/register">
            <img
              src={profile}
              alt="profile"
              className="bg-sky-50 p-1 cursor-pointer hover:transform hover:translate-y-[-15px] hover:scale-[1.03]  rounded-full h-24 w-24 transition duration-300 ease-in-out"
            />
          </NavLink>
        )}
        {auth?.accessToken && (
          <NavLink to={`${id}`}>
            <img
              src={loggedInprofile}
              alt="loggedInprofile"
              className="bg-sky-50 p-1 cursor-pointer hover:transform hover:translate-y-[-15px] hover:scale-[1.03]  rounded-full h-24 w-24 transition duration-300 ease-in-out"
            />
          </NavLink>
        )}
      </nav>
    </footer>
  );
}

export default Footer;
