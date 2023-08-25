"use client";

type Props = {
  image: string;
  name: string;
  description: string;
  setPopUpOpen: (boolean: boolean) => void;
  price: number;
};

import Image from "next/image";
import numeral from "numeral";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function PopUpProduct({
  image,
  name,
  description,
  setPopUpOpen,
  price,
}: Props) {
  let [amountValue, setAmoutValue] = useState(1);

  const formatNumber = (number: number) => {
    return numeral(number).format("0,0");
  };

  const handleAmount = (option: string) => {
    if (amountValue < 2 && option === "-") return false

    if (option === "-") {
      return setAmoutValue(amountValue - 1);
    } else {
      return setAmoutValue(amountValue + 1);
    }
  }

  return (
    <div className="popup">
      <div className="mainContainerPopUp">
        <div className="imageContainer">
          <Image src={image} alt="product image" width={247} height={200} />
        </div>
        <div className="infosContainer">
          <h1 className="productPopUpTitle">{name}</h1>
          <h1 className="productPopUpPrice">
            R$ {formatNumber(amountValue === 0 ? price : price * amountValue)}
          </h1>
          <p className="productPopUpDescription">{description}</p>
          <p className="popUpDetails">{"Veja mais detalhes do produto>"}</p>
          <div className="number-input">
            <button
              onClick={() => handleAmount("+")}
              className="control-button-less"
              data-action="subtract"
            >
              +
            </button>
            <input type="text" className="custom-input" value={amountValue} />
            <button
              onClick={() => handleAmount("-")}
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
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: 30,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}
