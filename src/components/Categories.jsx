import { useState } from "react";
import { NavLink } from "react-router-dom";
import myVideo from "../assets/7RW.gif";
import mypicture from "../assets/010.jpg";
import housepic from "../assets/images.jpeg";
import house from "../assets/Webp.webp";
import land from "../assets/land-sale-sign-empty-land-surrounded-with-white-wooden-fence_36367-1050.avif";

function Categories() {
  const [imageSrc, setImageSrc] = useState(mypicture);
  const [housesrc, setHousesrc] = useState(housepic);

  const handleMouseEnter = () => {
    setImageSrc(myVideo);
  };

  const handleMouseLeave = () => {
    setImageSrc(mypicture);
    setHousesrc(housepic);
  };
  const handleMouseenterHouse = () => {
    setHousesrc(house);
  };
  const handleMouseLeaveHouse = () => {
    setHousesrc(housepic);
  };
  return (
    <section className="desktop:pb-36">
      <h1 className="font-serif text-2xl px-8 pb-4">Categories</h1>
      <div className=" laptop:flex laptop:justify-center desktop:flex desktop:justify-center laptop:gap-8 text-center">
        <div className=" phone:px-8">
          <NavLink to="/categories/rent">
            <img
              src={imageSrc}
              className=" laptop:w-[30vw] laptop:h-[40vh] small:w-full phone:w-full phone:h-[30vh] small:h-[40vh] desktop:w-[30vw] desktop:h-[40vh] rounded-lg border-4 border-l-indigo-200  border-b-indigo-900 border-t-indigo-500 border-r-indigo-700  hover:transform  hover:translate-y-[-15px] hover:scale-[1.03] transition-all cursor-pointer duration-500"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </NavLink>

          <p className="text-2xl font-bold">Rent</p>
        </div>
        <div className=" phone:px-8">
          <NavLink to="/categories/sale">
            <img
              src={housesrc}
              onMouseEnter={handleMouseenterHouse}
              onMouseLeave={handleMouseLeaveHouse}
              className="laptop:w-[30vw] laptop:h-[40vh] desktop:w-[30vw] phone:w-full phone:h-[30vh] iphone:w-full iphone:h-[40vh] small:w-full small:h-[40vh] desktop:h-[40vh] rounded-lg border-4 border-l-fuchsia-900 border-t-fuchsia-700 border-r-fuchsia-500 border-b-fuchsia-300 hover:transform hover:translate-y-[-15px] hover:scale-[1.03] transition-all cursor-pointer duration-300"
            />
          </NavLink>

          <p className="text-2xl font-bold">House For Sale</p>
        </div>
        <NavLink to="/categories/land">
          <div className=" phone:px-8">
            <img
              src={land}
              className="laptop:w-[30vw] laptop:h-[40vh] small:w-full small:h-[40vh] phone:w-full phone:h-[30vh] desktop:w-[30vw] desktop:h-[40vh] rounded-lg border-4 border-r-green-600	border-t-green-300 border-l-green-100 hover:transform  hover:translate-y-[-15px] hover:scale-[1.03] transition-all cursor-pointer duration-200"
            />
            <p className="text-2xl font-bold">Land for Sale</p>
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default Categories;
