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
              className=" flex justify-start gap-8 phone:mb-6 iphone:mb-6"
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
                <p className=" text-2xl text-[1rem] font-bold">{rent.name}</p>
                <p className=" flex">
                  <span className=" flex mr-2 gap-2">
                    {rent.sittingroom && (
                      <span className=" flex justify-center">
                        {rent.sittingroom}
                        <img
                          width="20"
                          height="8"
                          src="https://img.icons8.com/ios-filled/50/living-room.png"
                          alt="living-room"
                        />
                      </span>
                    )}
                    <span className=" flex justify-center">
                      {rent.bedroom}
                      <img src={bedicon} className=" w-4 h-[1.2rem]" />
                    </span>
                  </span>
                  <span>📌 </span>
                  {rent.location}
                </p>
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
