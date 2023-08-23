import "./header.styles.scss";
import InsideHeader from "./components/insideHeader/insideHeader";
import SearchHeader from "./components/searchHeader/searchHeader";
import CategoriesHeader from "./components/categoriesHeader/categories";

export default function Header() {
  return (
    <div className="containerHeader">
      <InsideHeader />
      <SearchHeader/>
      <CategoriesHeader/>
    </div>
  );
}
