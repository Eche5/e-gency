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
                <p className=" text-2xl text-[1rem] font-bold">{sale.name} </p>
                <p className=" flex">
                  <div className=" flex mr-2 gap-2">
                    {sale.sittingroom && (
                      <div className=" flex justify-center">
                        {sale.sittingroom}
                        <img
                          width="20"
                          height="8"
                          src="https://img.icons8.com/ios-filled/50/living-room.png"
                          alt="living-room"
                        />
                      </div>
                    )}
                    <div className=" flex justify-center">
                      {sale.bedroom}
                      <img src={bedicon} className=" w-4 h-[1.2rem]" />
                    </div>
                  </div>
                  <span>📌 </span>
                  {sale.location}
                </p>
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
