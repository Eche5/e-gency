import bedicon from "../../assets/icons8-bedroom-96.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useCategory } from "../../context/CategorieContext";
import { useEffect } from "react";

function Rent() {
  const { rentList } = useCategory();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "e-gency | rent";
  }, []);

  return (
    <div className=" phone:pb-36 iphone:pb-36 small:pb-36">
      <button
        onClick={() => navigate(-1)}
        className=" text-white  rounded-3xl bg-gray-900 pr-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 "
      >
        👈back
      </button>
      <h1 className=" text-center text-3xl font-bold">Apartments for rent</h1>
      <ul className="laptop:grid laptop:grid-cols-2 laptop:m-8 laptop:gap-8 desktop:grid desktop:grid-cols-2 desktop:m-8 desktop:gap-8">
        {rentList.map((rent) => {
          return (
            <li
              className=" flex justify-start gap-8 phone:mb-6 iphone:mb-6 small:mb-6"
              key={rent.image}
            >
              <img
                src={rent.image}
                alt="studio2"
                className={
                  !rent.isActive
                    ? "laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg grayscale"
                    : "laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg"
                }
              />
              <div>
                <p className="  text-xl font-bold small:text-sm phone:text-xl">
                  {rent.name}
                </p>
                <div className=" flex items-center phone:flex small:grid small:grid-cols-1">
                  <div className=" flex  mr-2 gap-1 items-center ">
                    {rent.sittingroom && (
                      <div className=" flex  items-center gap-1">
                        <p className=" text-xl"> {rent.sittingroom}</p>
                        <img
                          className=" w-5 h-5 mb-1"
                          src="https://img.icons8.com/ios-filled/50/living-room.png"
                          alt="living-room"
                        />
                      </div>
                    )}
                    <div className=" flex justify-center items-center gap-1">
                      <p className=" text-xl"> {rent.bedroom}</p>
                      <img src={bedicon} className=" w-5 h-5 mb-1" />
                    </div>
                  </div>
                  <div className=" flex  items-center">
                    <span>📌 </span>
                    <p> {rent.location}</p>
                  </div>
                </div>
                <p className=" text-gray-950 mt-2">₦{rent.rent}</p>
                <NavLink to={`${rent.id}`}>
                  <button
                    disabled={!rent.isActive}
                    className={
                      !rent.isActive
                        ? "text-white  rounded-3xl bg-gray-300 px-8  p-2  ease-in-out border-2 border-gray-300 laptop:m-4 cursor-not-allowed"
                        : " text-white  rounded-3xl bg-gray-900 px-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 laptop:m-4"
                    }
                  >
                    {rent.isActive ? "View" : "Sold"}
                  </button>
                </NavLink>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Rent;
