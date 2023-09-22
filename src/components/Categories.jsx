import { NavLink } from "react-router-dom";
import myVideo from "../assets/7RW.gif";
import house from "../assets/Webp.webp";
import land from "../assets/land-sale-sign-empty-land-surrounded-with-white-wooden-fence_36367-1050.avif";
function Categories() {
  return (
    <section className=" pb-36">
      <h1 className=" font-serif text-2xl px-8 pb-4">Categories</h1>
      <div className=" flex justify-center gap-8">
        <div>
          <NavLink to="/categories/rent">
            <img
              src={myVideo}
              className="w-[30vw] h-[40vh] rounded-lg border-4 border-l-indigo-200  border-b-indigo-900 border-t-indigo-500 border-r-indigo-700 hover:transform sm:mx-auto hover:translate-y-[-15px] hover:scale-[1.03] transition-all cursor-pointer duration-500"
            />
          </NavLink>

          <p className=" text-2xl font-bold">Rent</p>
        </div>
        <div>
          <NavLink to="/categories/sale">
            <img
              src={house}
              className="w-[30vw] h-[40vh] rounded-lg border-4 border-l-fuchsia-900 border-t-fuchsia-700 border-r-fuchsia-500 border-b-fuchsia-300 hover:transform sm:mx-auto hover:translate-y-[-15px] hover:scale-[1.03] transition-all cursor-pointer duration-300"
            />
          </NavLink>

          <p className=" text-2xl font-bold">House For Sale</p>
        </div>
        <div>
          <img
            src={land}
            className="w-[30vw] h-[40vh] rounded-lg border-4 border-r-green-600	border-t-green-300 border-l-green-100 hover:transform sm:mx-auto hover:translate-y-[-15px] hover:scale-[1.03] transition-all cursor-pointer duration-200"
          />
          <p className=" text-2xl font-bold">Land for Sale</p>
        </div>
      </div>
    </section>
  );
}

export default Categories;
