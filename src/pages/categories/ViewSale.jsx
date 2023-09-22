import bedicon from "../../assets/icons8-bedroom-96.png";
import { useNavigate, useParams } from "react-router-dom";
import { useCategory } from "../../context/CategorieContext";
import { useAuth } from "../../context/AuthenticationContext";

function ViewRent() {
  const { id } = useParams();
  const { saleList } = useCategory();
  const { auth } = useAuth();
  const selectedItem = saleList?.find((item) => item.id === id);
  const navigate = useNavigate();

  const contactOwnerHandler = () => {
    if (!auth?.accessToken) {
      const confirmed = window.confirm(
        "You must be logged in to contact owner, Log in?"
      );

      if (confirmed) navigate("/login");
    }
  };
  if (!selectedItem) {
    return <div>Item not found</div>;
  }
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className=" text-white  rounded-3xl bg-gray-900 pr-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 "
      >
        👈back
      </button>
      <div className="flex justify-center items-center  pb-36">
        <div className="text-center flex justify-center">
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="w-[40vw] h-[60vh]"
          />
          <div className=" m-16 text-3xl font-extrabold">
            <h2>{selectedItem.name}</h2>
            <div className=" flex justify-center gap-4">
              {selectedItem.sittingroom && (
                <div className=" flex justify-center">
                  {selectedItem.sittingroom}
                  <img
                    width="28"
                    height="8"
                    src="https://img.icons8.com/ios-filled/50/living-room.png"
                    alt="living-room"
                  />
                </div>
              )}
              <div className=" flex justify-center">
                {selectedItem.bedroom}
                <img src={bedicon} className=" w-8 h-[2rem]" />
              </div>
            </div>
            <p>📌: {selectedItem.location}</p>
            <p>Price: ₦{selectedItem.amount}</p>
            <button
              onClick={contactOwnerHandler}
              className="text-white rounded-3xl bg-gray-900 pr-8 p-2 hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 m-4"
            >
              Contact the owner
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewRent;
