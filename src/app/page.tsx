import CarouselBrands from "./components/carouseBrands/carouselBrands";
import CarouselProducts from "./components/carouselProducts/carouselProducts";
import MainPageCategoryInside from "./components/mainPageCategoryInside/mainPageCategoryInside";
import MainPageIconsCategory from "./components/mainPageIconsCategory/mainPageIconsCategory";
import PartnersContainer from "./components/partnersContainer/partnersContainer";
import ProductsContainer from "./components/productsContainer/productsContainer";
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
      <CarouselProducts />
      <div className="partnersContainerMainPage">
        <PartnersContainer />
        <PartnersContainer />
      </div>
      <div className="containerSeparate">
        <div className="linewidth"></div>
        <h1>Produtos relacionados</h1>
        <div className="linewidth"></div>
      </div>
      <p style={{ color: '#3F3F40', fontSize: 15, fontWeight: 700, textAlign: 'center', margin: 10 }}>Ver todos</p>
      <div className="partnersContainerMainPage">
        <ProductsContainer />
        <ProductsContainer />
      </div>
      <div className="containerSeparate" style={{ margin: 30 }}>
        <h1>Navegue por marcas</h1>
      </div>
      <CarouselBrands />
    </div>
  );
}
