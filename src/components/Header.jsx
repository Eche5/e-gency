import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useAuth } from "../context/AuthenticationContext";
import useLogOut from "../hooks/useLogOut";

function Header() {
  const { auth, headerRef } = useAuth();
  const logout = useLogOut();
  const navigate = useNavigate();

  const LogoutHandler = async () => {
    const result = await Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if (result.isConfirmed) logout();
    navigate("/");
  };
  return (
    <header className=" flex justify-between" ref={headerRef}>
      <p>
        <span className=" transform absolute text-center skew-y-[-15deg] laptop:text-5xl desktop:text-5xl phone:text-2xl small:text-2xl">
          e
        </span>
        <span className=" laptop:p-8 laptop:text-5xl desktop:text-5xl desktop:p-8 phone:text-2xl phone:pl-4 iphone:pl-3 small:text-2xl small:pl-3">
          -gency
        </span>
      </p>
      {!auth?.foundUser && (
        <div className=" bg-gray-800 rounded-3xl p-2 justify-center flex gap-1 m-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? " text-white  rounded-3xl border-2 pr-8 border-gray-700 p-1 grayscale cursor-not-allowed"
                : " text-white  rounded-3xl border-2 pr-8 border-gray-700 p-1  hover:transform hover:translate-y-[-5px] hover:scale-[1.03] transition-all"
            }
          >
            Sign in
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? " text-black bg-white rounded-3xl p-1  grayscale cursor-not-allowed"
                : " text-black bg-white rounded-3xl p-1   hover:transform hover:translate-y-[-5px] hover:scale-[1.03] transition-all"
            }
          >
            <p className=" flex justify-between gap-4">
              <span>Sign up</span>
              <span>↗</span>
            </p>
          </NavLink>
        </div>
      )}
      {auth?.accessToken && (
        <button
          onClick={() => LogoutHandler()}
          className=" text-white  rounded-3xl bg-gray-900 pr-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 m-4"
        >
          <p className=" flex justify-between gap-4">
            <span>Log Out</span>
            <img
              width="20"
              height="16"
              src="https://img.icons8.com/ios/50/FFFFFF/down-left-arrow.png"
              alt="down-left-arrow"
            />
          </p>
        </button>
      )}
    </header>
  );
}

export default Header;
