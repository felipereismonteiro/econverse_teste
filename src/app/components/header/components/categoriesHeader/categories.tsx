import "./styles/categoriesHeader.styles.scss";
import { PiCrownSimpleBold } from "react-icons/pi";

export default function CategoriesHeader() {
  return (
    <div className="containerCategories containerShaddow">
      <p>TODAS AS CATEGORIAS</p>
      <p>SUPERMERCADO</p>
      <p>LIVROS</p>
      <p>MODA</p>
      <p>LANÇAMENTOS</p>
      <p className="selected">OFERTAS DO DIA</p>
      <div className="subscriber">
        <PiCrownSimpleBold className="subscriberIcon"/>
        <p className="subscriber">ASSINATURA</p>
      </div>
    </div>
  );
}
