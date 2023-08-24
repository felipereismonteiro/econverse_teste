import CategoryBox from "./components/categoryBox/categoryBox";
import { Categories } from "./components/categoryBox/components/categories";
import "./mainPageCategoryInside.styles.scss";

export default function MainPageCategoryInside() {
  return (
  <div className="MainPageCategoryInsideContainer">
   {Categories.map((c, index) => <CategoryBox name={c.name} color={c.color} key={index}/>)}
  </div>
  );
}
