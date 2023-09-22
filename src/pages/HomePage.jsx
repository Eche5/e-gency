import { useEffect } from "react";
import Carousels from "../components/Carousels";
import Categories from "../components/Categories";

function HomePage() {
  useEffect(() => {
    document.title = "e-rent | Home ";
  }, []);
  return (
    <section>
      <Carousels />
      <Categories />
    </section>
  );
}

export default HomePage;
