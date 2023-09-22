import { useState } from "react"; // Import useState from React

import house1 from "../assets/74a3240297f86022c1fff399507576fe.jpg";
import house2 from "../assets/Home.jpeg";
import house3 from "../assets/BG8b.png";

function Carousels() {
  const images = [house1, house2, house3];
  const [activeItem, setActiveItem] = useState(0); // Initialize activeItem state

  // Function to handle button click and set the active item
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className={`carousel-item w-full justify-center ${
              activeItem === index ? "active-item" : ""
            }`}
          >
            <img src={image} className="w-[40vw] h-[60vh] rounded-lg" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Carousels;
