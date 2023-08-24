import Image from "next/image";
import partnersGradient from "@/../public/gradientpartners.png";
import "./productsContainer.styles.scss";

export default function ProductsContainer() {
  return (
    <div className="productsContainerSection">
      <div className="productsBox">
        <Image className="banner" src={partnersGradient} alt="partners gradient" />
      </div>
      <div className="infos">
        <h1>Produtos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>CONFIRA</button>
      </div>
    </div>
  );
}
