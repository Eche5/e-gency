import { createContext, useContext } from "react";
import studio from "../assets/Before_After_ Decorating my Chicago studio.jpeg";
import studio2 from "../assets/746bb7699d371132cc15cbb3b831fef4.jpg";
import bedroom from "../assets/2 bedroom apartment for rent in Vinhomes Metropolis, Lieu Giai street.jpeg";
import bedrooms from "../assets/Projects.jpeg";
import house1 from "../assets/Houses to Rent in Glengarriff, Cork _ Daft_ie.png";
import house2 from "../assets/10 Potret Rumah Mewah Hotma Sitompul, Megah Sampai Raffi Ahmad Tersasar.jpeg";
import bedrooms1 from "../assets/Ayrı Mutfak Villa.jpeg";
import modernHouse from "../assets/moderhouse.jpeg";
import { Outlet } from "react-router-dom";

const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const rentList = [
    {
      id: "R3G7P9Q2W1",
      name: "Studio Apartment, Fully furnished",
      bedroom: "1",
      location: "Maitama",
      image: studio,
      rent: "50,000",
    },
    {
      id: "L5K8M2N0P1",
      name: "Studio Apartment, semi-furnished",
      bedroom: "1",
      location: "Lokogoma",
      image: studio2,
      rent: "70,000",
    },
    {
      id: "S9H6T3D4Y7",
      name: "3 bedroom Apartment, Fully furnished",
      bedroom: "2",
      location: "Malali",
      sittingroom: "1",
      image: bedroom,
      rent: "150,000",
    },
    {
      id: "X2Z1V0C9Q8",
      name: "2 bedroom Apartment, semi-furnished",
      bedroom: "1",
      sittingroom: "1",
      location: "Malali",
      image: bedrooms,
      rent: "100,000",
    },
  ];
  const saleList = [
    {
      id: "R3G7HY2W1",
      name: "2 bedroom House, Fully furnished",
      bedroom: "1",
      location: "Ungwan-Rimi",
      sittingroom: "1",
      image: house1,
      amount: "15,000,000",
    },
    {
      id: "$FYJHN&2W1",

      name: "6 bedroom House, Fully furnished",
      bedroom: "4",
      sittingroom: "2",
      location: "Barnawa",
      image: house2,
      amount: "250,000,000",
    },
    {
      id: "ERVC6GQ2W1",

      name: "2 bedroom House, Fully furnished",
      bedroom: "1",
      location: "Malali",
      sittingroom: "1",
      image: modernHouse,
      amount: "25,000,000",
    },
    {
      id: "R3HYBU8Q2W1",
      name: "Fully furnished mansion",
      bedroom: "7",
      sittingroom: "1",
      location: "Malali",
      image: bedrooms1,
      amount: "500,000,000",
    },
  ];
  return (
    <categoryContext.Provider value={{ rentList, saleList }}>
      <Outlet />
    </categoryContext.Provider>
  );
};

const useCategory = () => {
  const context = useContext(categoryContext);
  return context;
};

export { useCategory, CategoryProvider };
