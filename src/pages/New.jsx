import bedicon from "../assets/icons8-bedroom-96.png";
import { useNavigate } from "react-router-dom";
import new1 from "../assets/744adac1deed3c25af167b0253d5a287.jpg";
import new3 from "../assets/studio-apartment-ideas-room-divider-ideas-tranebergsva-gen-stockholm-living-room-industry-fantastic-frank-popular-copy-1589570199.jpg";
import new2 from "../assets/20e5536509d38753c888b66af7c245f8--backyard-pools-architecture-photo.jpg";
import new4 from "../assets/50-small-studio-apartment-design-ideas-modern-tiny-clever.jpg";

import { useEffect } from "react";

function Rent() {
  const newList = [
    {
      id: "ASJJNSU7HK",
      name: "Luxury modern house",
      location: "U/Rimi",
      bedroom: "4",
      sittingroom: "2",
      image: new1,
      amount: "200,000,000",
      isActive: true,
    },
    {
      id: "JTYUJNSU7HK",
      name: "Small studio modern apartment",
      location: "Malali",
      bedroom: "5",
      sittingroom: "3",
      image: new4,
      amount: "270,000,000",
      isActive: true,
    },
    {
      id: "NJSUKSML789",
      name: "White Luxury studio apartment for rent",
      location: "Kawo",
      bedroom: "1",
      image: new3,
      amount: "270,000",
      isActive: true,
    },
    {
      id: "JTYUJSSNSU7HK",
      name: "White Luxury modern house",
      location: "Mando",
      bedroom: "5",
      sittingroom: "3",
      image: new2,
      amount: "270,000,000",
      isActive: true,
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "e-gency | new";
  }, []);

  const currentTimestamp = Date.now();

  const date = new Date(currentTimestamp);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <div className=" phone:pb-36 iphone:pb-36 small:pb-36">
      <button
        onClick={() => navigate(-1)}
        className=" text-white  rounded-3xl bg-gray-900 pr-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 "
      >
        👈back
      </button>
      <h1 className=" text-center text-3xl font-bold">New Entries</h1>
      <ul className=" desktop:flex desktop:justify-center laptop:flex laptop:justify-center desktop:m-8 phone:mx-24 desktop:gap-8">
        {newList.map((news) => {
          return (
            <li
              className="phone:mb-24 iphone:mb-24 phone:text-center"
              key={news.image}
            >
              <img
                src={news.image}
                alt="studio2"
                className={
                  !news.isActive
                    ? "laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg grayscale"
                    : "laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg"
                }
              />
              <div className="desktop:pr-28">
                <p className=" text-2xl text-[1rem] font-bold">{news.name}</p>
                <p className=" flex">
                  <span className=" flex mr-2 gap-2 phone:pl-8">
                    {news.sittingroom && (
                      <span className=" flex justify-center">
                        {news.sittingroom}
                        <img
                          width="20"
                          height="8"
                          src="https://img.icons8.com/ios-filled/50/living-room.png"
                          alt="living-room"
                        />
                      </span>
                    )}
                    <span className=" flex justify-center ">
                      {news.bedroom}
                      <img src={bedicon} className=" w-4 h-[1.2rem]" />
                    </span>
                  </span>
                  <span>📌 </span>
                  {news.location}
                </p>
                <p className=" text-gray-950 mt-2">₦{news.amount}</p>
                <p className=" font-extrabold">
                  Posted on:&nbsp;
                  <span className=" font-normal">{formattedDate}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Rent;
