type Props = {
 image: string;
 description: string;
 price: string;
 priceX: string;
 priceBefore: string;
}

import Image from "next/image";
import "./styles/carProduct.styles.scss";

export default function CardProduct({ image, description, price, priceX, priceBefore }: Props) {
 return(
  <section className="containerCardProduct">
   <div className="imageCardProduct">
    <Image src={image} alt="image product" width={247} height={228} />
   </div>
   <div className="descriptionProduct">
    <p>{description}</p>
   </div>
   <div className="priceProduct">
    <p className="priceBefore">R$ {priceBefore}</p>
    <p className="priceAfter">R$ {price}</p>
    <p className="pricesX">ou 2x de R$ {priceX} sem juros</p>
   </div>
   <div className="deliver">
    <p>Frete Grátis</p>
   </div>
   <button>COMPRAR</button>
  </section>
 )
}