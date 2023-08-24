import CarouselProducts from "./components/carouselProducts/carouselProducts";
import MainPageCategoryInside from "./components/mainPageCategoryInside/mainPageCategoryInside";
import MainPageIconsCategory from "./components/mainPageIconsCategory/mainPageIconsCategory";
import PromoBanner from "./components/promoBanner/promoBanner";
import "./styles/homepage.styles.scss";

export default function Home() {
  return (
    <div className="mainPageContainer">
      <PromoBanner />
      <MainPageIconsCategory />
      <div className="containerSeparate">
        <div className="linewidth"></div>
        <h1>Produtos relacionados</h1>
        <div className="linewidth"></div>
      </div>
      <MainPageCategoryInside />
      <CarouselProducts/>
    </div>
  );
}
