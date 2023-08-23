import "./styles/categoriesHeader.styles.scss";
import { PiCrownSimpleBold } from "react-icons/pi";

export default function CategoriesHeader() {
  const categories = [
    "TODAS AS CATEGORIAS",
    "SUPERMERCADO",
    "LIVROS",
    "MODA",
    "LANÇAMENTO",
    "OFERTAS DO DIA",
    "ASSINATURA",
  ];
  return (
    <div className="containerCategories containerShaddow">
      {categories.map((c, index) => {
        if (c === "OFERTAS DO DIA") {
          return (
            <p key={index} className="selected">
              OFERTAS DO DIA
            </p>
          );
        } else if (c === "ASSINATURA") {
          return (
            <div key={index} className="subscriber">
              <PiCrownSimpleBold className="subscriberIcon" />
              <p className="subscriber">ASSINATURA</p>
            </div>
          );
        } else {
          return <p key={index}>{c}</p>;
        }
      })}
    </div>
  );
}
