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

export default function CardProduct({
  image,
  description,
  price,
  priceX,
  priceBefore,
  name
}: Props) {
  const [popUpOpen, setPopUpOpen] = useState(false);
  let [amoutValue, setAmoutValue] = useState(0);


  const formatNumber = (number: number) => {
    return numeral(number).format("0,0");
  };

  const handleAmoutValue = (option: string) => {
    if (option === "-") {
      if (amoutValue < 1) return false;
      setAmoutValue((amoutValue -= 1));
    }
  };

  return (
    <section className="containerCardProduct">
      {popUpOpen && (
        <div className="popup">
          <div className="mainContainerPopUp">
            <div className="imageContainer">
              <Image src={image} alt="product image" width={247} height={200} />
            </div>
            <div className="infosContainer">
              <h1 className="productPopUpTitle">{name}</h1>
              <h1 className="productPopUpPrice">R$ {formatNumber(amoutValue === 0 ? price : price * amoutValue) }</h1>
              <p className="productPopUpDescription">
                {description}
              </p>
              <p className="popUpDetails">{"Veja mais detalhes do produto>"}</p>
              <div className="number-input">
                <button
                  onClick={() => setAmoutValue(amoutValue++)}
                  className="control-button-less"
                  data-action="subtract"
                >
                  +
                </button>
                <input
                  type="text"
                  className="custom-input"
                  value={amoutValue}
                />

                <button
                  onClick={() => handleAmoutValue("-")}
                  className="control-button-plus"
                  data-action="add"
                >
                  -
                </button>
              </div>

              <button className="buttonsubmit">COMPRAR</button>
            </div>
            <AiOutlineClose
              onClick={() => setPopUpOpen(false)}
              style={{ position: "absolute", top: 0, right: 0, margin: 30, cursor: "pointer" }}
            />
          </div>
        </div>
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
