function CarouselImage({ children }) {
  return (
    <div className=" overflow-hidden relative">
      <div>{children}</div>
    </div>
  );
}

export default CarouselImage;
