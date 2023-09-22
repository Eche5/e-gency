import bedicon from "../../assets/icons8-bedroom-96.png";
import { NavLink } from "react-router-dom";
import { useCategory } from "../../context/CategorieContext";

function Rent() {
  const { rentList } = useCategory();
  return (
    <div>
      <ul className="grid grid-cols-2 m-8 gap-8">
        {rentList.map((rent) => {
          return (
            <li className=" flex justify-start gap-8" key={rent.image}>
              <img
                src={rent.image}
                alt="studio2"
                className="w-48 h-48 rounded-lg"
              />
              <div>
                <p className=" text-2xl font-bold">{rent.name} </p>
                <p className=" flex">
                  <div className=" flex mr-2 gap-2">
                    {rent.sittingroom && (
                      <div className=" flex justify-center">
                        {rent.sittingroom}
                        <img
                          width="20"
                          height="8"
                          src="https://img.icons8.com/ios-filled/50/living-room.png"
                          alt="living-room"
                        />
                      </div>
                    )}
                    <div className=" flex justify-center">
                      {rent.bedroom}
                      <img src={bedicon} className=" w-4 h-[1.2rem]" />
                    </div>
                  </div>
                  <span>📌 </span>
                  {rent.location}
                </p>
                <p className=" text-gray-950 mt-2">₦{rent.rent}</p>
                <NavLink to={`${rent.id}`}>
                  <button className=" text-white  rounded-3xl bg-gray-900 px-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 m-4">
                    View
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
