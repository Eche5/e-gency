import bedicon from "../../assets/icons8-bedroom-96.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useCategory } from "../../context/CategorieContext";
import { useEffect } from "react";
function Sale() {
  const { saleList } = useCategory();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "e-gency | sale";
  });

  return (
    <div className=" phone:pb-36 iphone:pb-36 small:pb-36">
      <button
        onClick={() => navigate(-1)}
        className=" text-white  rounded-3xl bg-gray-900 pr-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 "
      >
        👈back
      </button>
      <h1 className=" text-center text-3xl font-bold">Houses for Sale</h1>

      <ul className="laptop:grid laptop:grid-cols-2 laptop:m-8 laptop:gap-8 desktop:grid desktop:grid-cols-2 desktop:m-8 desktop:gap-8">
        {saleList.map((sale) => {
          return (
            <li
              className=" flex justify-start gap-8 phone:mb-6 iphone:mb-6 small:mb-6"
              key={sale.image}
            >
              <img
                src={sale.image}
                alt="studio2"
                className={
                  !sale.isActive
                    ? "laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg grayscale"
                    : "laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg"
                }
              />
              <div>
                <p className="  text-xl font-bold small:text-sm phone:text-xl">
                  {sale.name}
                </p>
                <div className=" flex items-center phone:flex small:grid small:grid-cols-1">
                  <div className=" flex justify-center mr-2 gap-1 items-center ">
                    {sale.sittingroom && (
                      <div className=" flex justify-center items-center gap-1 ">
                        <p className=" text-xl">{sale.sittingroom}</p>
                        <img
                          className=" w-5 h-5 mb-1"
                          src="https://img.icons8.com/ios-filled/50/living-room.png"
                          alt="living-room"
                        />
                      </div>
                    )}
                    <div className=" flex justify-center items-center gap-1">
                      <p className=" text-xl">{sale.bedroom}</p>
                      <img src={bedicon} className=" w-5 h-5 mb-1" />
                    </div>
                  </div>
                  <div className=" flex  items-center">
                    <span>📌 </span>
                    <p> {sale.location}</p>
                  </div>
                </div>
                <p className=" text-gray-950 mt-2">₦{sale.amount}</p>
                <NavLink to={`${sale.id}`}>
                  <button
                    disabled={!sale.isActive}
                    className={
                      !sale.isActive
                        ? "text-white  rounded-3xl bg-gray-300 px-8  p-2  ease-in-out border-2 border-gray-300 laptop:m-4 cursor-not-allowed"
                        : " text-white  rounded-3xl bg-gray-900 px-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 laptop:m-4"
                    }
                  >
                    {sale.isActive ? "View" : "Sold"}{" "}
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

export default Sale;
