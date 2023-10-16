import bedicon from "../../assets/icons8-bedroom-96.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCategory } from "../../context/CategorieContext";
import { useAuth } from "../../context/AuthenticationContext";
import ContactForm from "../../components/ContactForm";
import { useEffect } from "react";

function ViewRent() {
  const { id } = useParams();

  const { auth } = useAuth();

  const { rentList, setIsMOdal, isModal } = useCategory();

  const selectedItem = rentList?.find((item) => item.id === id);
  useEffect(() => {
    document.title = `e-gency | ${selectedItem.name}`;
  });
  console.log(selectedItem);
  const navigate = useNavigate();
  const location = useLocation();

  const contactOwnerHandler = () => {
    if (!auth?.accessToken) {
      const confirmed = window.confirm(
        "You must be logged in to contact owner, Log in?"
      );

      if (confirmed)
        navigate("/login", {
          state: { from: location },
          replace: true,
        });
    } else {
      setIsMOdal(true);
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
      <div className=" items-center pb-36">
        <div className="text-center laptop:flex laptop:justify-center desktop:flex desktop:justify-center">
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="laptop:w-[40vw] laptop:h-[60vh] desktop:w-[40vw] desktop:h-[60vh] rounded-lg"
          />
          <div className=" laptop:m-16 laptop:text-3xl desktop:m-16 desktop:text-3xl font-extrabold">
            <h2>{selectedItem.name}</h2>
            <div className=" flex justify-center gap-4">
              {selectedItem.sittingroom && (
                <div className=" flex justify-center">
                  {selectedItem.sittingroom}
                  <img
                    width="20"
                    height="8"
                    src="https://img.icons8.com/ios-filled/50/living-room.png"
                    alt="living-room"
                  />
                </div>
              )}
              <div className=" flex justify-center gap-4">
                {selectedItem.bedroom}
                <img src={bedicon} className=" w-8 h-[2rem]" />
              </div>
            </div>
            <p>📌: {selectedItem.location}</p>
            <p>Rent: ₦{selectedItem.rent}</p>
            <button
              onClick={contactOwnerHandler}
              className="text-white rounded-3xl bg-gray-900 pr-8 p-2 hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 m-4"
            >
              Contact the owner
            </button>
          </div>
        </div>
      </div>
      {isModal && <ContactForm />}
    </>
  );
}

export default ViewRent;
