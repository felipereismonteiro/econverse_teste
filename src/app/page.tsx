import MainPageCategoryInside from "./components/mainPageCategoryInside/mainPageCategoryInside";
import MainPageIconsCategory from "./components/mainPageIconsCategory/mainPageIconsCategory";
import PromoBanner from "./components/promoBanner/promoBanner";

export default function Home() {
  return(
    <div className="mainPageContainer">
      <PromoBanner />
      <MainPageIconsCategory/>
      <MainPageCategoryInside/>
    </div>
  )
}