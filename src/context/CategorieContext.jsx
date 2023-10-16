import { createContext, useContext, useState } from "react";
import studio from "../assets/a3b1c3320486b2adbe92757d9f3e81fc.jpg";
import studio2 from "../assets/746bb7699d371132cc15cbb3b831fef4.jpg";
import bedroom from "../assets/2 bedroom apartment for rent in Vinhomes Metropolis, Lieu Giai street.jpeg";
import bedrooms from "../assets/Projects.jpeg";
import house1 from "../assets/Houses to Rent in Glengarriff, Cork _ Daft_ie.png";
import house2 from "../assets/10 Potret Rumah Mewah Hotma Sitompul, Megah Sampai Raffi Ahmad Tersasar.jpeg";
import bedrooms1 from "../assets/Ayrı Mutfak Villa.jpeg";
import modernHouse from "../assets/moderhouse.jpeg";
import land1 from "../assets/Untitled-design-2019-08-19T125923.761.webp";
import land2 from "../assets/640px-040719_172_dorset_marnhull2.jpg";
import land3 from "../assets/1-3999929677.jpeg";
import land4 from "../assets/Boggy_land_near_a_stream_near_the_Grove_-_geograph.org.uk_-_1700144.jpg";

import { Outlet } from "react-router-dom";

const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [isModal, setIsMOdal] = useState(false);
  const rentList = [
    {
      id: "R3G7P9Q2W1",
      name: "Studio Apartment, Fully-furnished",
      bedroom: "1",
      location: "Maitama",
      image: studio,
      rent: "50,000",
      isActive: true,
    },
    {
      id: "L5K8M2N0P1",
      name: "Studio Apartment, semi-furnished",
      bedroom: "1",
      location: "Lokogoma",
      image: studio2,
      rent: "70,000",
      isActive: false,
    },
    {
      id: "S9H6T3D4Y7",
      name: "3 bedroom Apartment, Fully furnished",
      bedroom: "2",
      location: "Malali",
      sittingroom: "1",
      image: bedroom,
      rent: "150,000",
      isActive: true,
    },
    {
      id: "X2Z1V0C9Q8",
      name: "2 bedroom Apartment, semi-furnished",
      bedroom: "1",
      sittingroom: "1",
      location: "Malali",
      image: bedrooms,
      rent: "100,000",
      isActive: true,
    },
  ];
  const saleList = [
    {
      id: "R3G7HY2W1",
      name: "2 bedroom House, Fully furnished",
      bedroom: "1",
      location: "Rimi",
      sittingroom: "1",
      image: house1,
      amount: "15,000,000",
      isActive: true,
    },
    {
      id: "$FYJHN&2W1",

      name: "6 bedroom House, Fully furnished",
      bedroom: "4",
      sittingroom: "2",
      location: "Barnawa",
      image: house2,
      amount: "250,000,000",
      isActive: true,
    },
    {
      id: "ERVC6GQ2W1",

      name: "2 bedroom House, Fully furnished",
      bedroom: "1",
      location: "Malali",
      sittingroom: "1",
      image: modernHouse,
      amount: "25,000,000",
      isActive: true,
    },
    {
      id: "R3HYBU8Q2W1",
      name: "Fully furnished mansion",
      bedroom: "7",
      sittingroom: "1",
      location: "Malali",
      image: bedrooms1,
      amount: "500,000,000",
      isActive: false,
    },
  ];
  const landList = [
    {
      id: "R3HYBU8Q2W1",
      name: "10 hectars of arable Land",
      location: "Narayi",
      image: land1,
      amount: "100,000,000,000",
      isActive: false,
    },
    {
      id: "R3HYJIKDBI8",
      name: "7 hectars of arable Land",
      location: "Kamanzo",
      image: land2,
      amount: "150,000,000,000",
      isActive: true,
    },
    {
      id: "RHYBSJINBA6",
      name: "30 hectars of Boggy Land near a stream",
      location: "Narayi",
      image: land4,
      amount: "300,000,000,000",
      isActive: false,
    },
    {
      id: "ASJJNSU7HK",
      name: "15 hectars of arable Land  Land near a stream",
      location: "U/Maigero",
      image: land3,
      amount: "200,000,000,000",
      isActive: true,
    },
  ];

  return (
    <categoryContext.Provider
      value={{
        rentList,
        saleList,
        setIsMOdal,
        isModal,
        landList,
      }}
    >
      <Outlet />
    </categoryContext.Provider>
  );
};

const useCategory = () => {
  const context = useContext(categoryContext);
  return context;
};

export { useCategory, CategoryProvider };
