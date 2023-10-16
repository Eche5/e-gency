import { NavLink, useNavigate } from "react-router-dom";
import { useCategory } from "../../context/CategorieContext";
import { useEffect } from "react";

function Land() {
  const { landList } = useCategory();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "e-gency | land";
  }, []);
  return (
    <div className=" phone:pb-36 iphone:pb-36 small:pb-36">
      <button
        onClick={() => navigate(-1)}
        className=" text-white  rounded-3xl bg-gray-900 pr-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 "
      >
        👈back
      </button>
      <h1 className=" text-center text-3xl font-bold">Land for sale</h1>
      <ul className="laptop:grid laptop:grid-cols-2 laptop:m-8 laptop:gap-8 desktop:grid desktop:grid-cols-2 desktop:m-8 desktop:gap-8">
        {landList.map((land) => {
          return (
            <li
              className=" flex justify-start gap-8 phone:mb-6 iphone:mb-6"
              key={land.image}
            >
              <img
                src={land.image}
                alt="studio2"
                className={
                  !land.isActive
                    ? "laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg grayscale"
                    : "laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg"
                }
              />
              <div>
                <p className=" text-2xl text-[1rem] font-bold">{land.name}</p>
                <p className=" flex justify-start gap-2">
                  <span>📌 </span>
                  {land.location}
                </p>
                <p className=" text-gray-950 my-2">₦{land.amount}</p>
                <NavLink to={`${land.id}`}>
                  <button
                    disabled={!land.isActive}
                    className={
                      !land.isActive
                        ? "text-white  rounded-3xl bg-gray-300 px-8  p-2  ease-in-out border-2 border-gray-300 laptop:m-4 cursor-not-allowed"
                        : " text-white  rounded-3xl bg-gray-900 px-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 laptop:m-4"
                    }
                  >
                    {land.isActive ? "View" : "Sold"}
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

export default Land;
