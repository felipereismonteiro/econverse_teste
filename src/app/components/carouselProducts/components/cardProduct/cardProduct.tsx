"use client";

type Props = {
  image: string;
  description: string;
  price: number;
  priceX: number;
  priceBefore: number;
  name: string;
};

import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import "./styles/carProduct.styles.scss";
import numeral from "numeral";
import PopUpProduct from "../popupProduct/popUpProduct";

export default function CardProduct({
  image,
  description,
  price,
  priceX,
  priceBefore,
  name,
}: Props) {
  const [popUpOpen, setPopUpOpen] = useState(false);

  const formatNumber = (number: number) => {
    return numeral(number).format("0,0");
  };

  return (
    <section className="containerCardProduct">
      {popUpOpen && (
        <PopUpProduct
          image={image}
          description={description}
          name={name}
          price={price}
          setPopUpOpen={setPopUpOpen}
        />
      )}

      <div className="imageCardProduct">
        <Image src={image} alt="image product" width={247} height={228} />
      </div>
      <div className="descriptionProduct">
        <p>{description}</p>
      </div>
      <div className="priceProduct">
        <p className="priceBefore">R$ {formatNumber(priceBefore)}</p>
        <p className="priceAfter">R$ {formatNumber(price)}</p>
        <p className="pricesX">ou 2x de R$ {formatNumber(priceX)} sem juros</p>
      </div>
      <div className="deliver">
        <p>Frete Grátis</p>
      </div>
      <button onClick={() => setPopUpOpen(true)} className="submit">
        COMPRAR
      </button>
    </section>
  );
}
