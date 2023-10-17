import { useState } from "react"; // Import useState from React

import house1 from "../assets/74a3240297f86022c1fff399507576fe.jpg";
import house2 from "../assets/Home.jpeg";
import house3 from "../assets/BG8b.png";
import { useAuth } from "../context/AuthenticationContext";

function Carousels() {
  const images = [house1, house2, house3];

  const { headerRef } = useAuth();

  const [indexImage, setIndexImage] = useState(1);

  const [activeItem, setActiveItem] = useState(1); // Initialize activeItem state

  const handlePreviousClick = () => {
    if (headerRef.current) {
      setTimeout(() => {
        headerRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  const handleNextClick = () => {
    if (headerRef.current) {
      setTimeout(() => {
        headerRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
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
            <img
              src={image}
              className="laptop:w-[40vw] laptop:h-[60vh] desktop:w-[40vw] desktop:h-[60vh] small:w-[80vw] small:h-[60vh] phone:w-[80vw] phone:h-[50vh] rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
              <a
                disabled={indexImage === 1}
                href={`#item${indexImage}`}
                className="btn btn-circle"
                onClick={() => {
                  setIndexImage((prev) => prev - 1);
                  handlePreviousClick();
                }}
              >
                ❮
              </a>
              <a
                disabled={indexImage === 3}
                href={`#item${indexImage}`}
                className="btn btn-circle"
                onClick={() => {
                  handleNextClick();
                  setIndexImage((prev) => prev + 1);
                }}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Carousels;
