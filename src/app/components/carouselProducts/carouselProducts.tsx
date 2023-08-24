"use client";

import { ApiProducts } from "@/app/api/products";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import numeral from "numeral";
import CardProduct from "./components/cardProduct/cardProduct";
import "./carouselProducts.styles.scss";

export default function CarouselProducts() {
  const ScrollRef = useRef(null);
  const [products, setProducts] = useState<Products | undefined>();

  const formatNumber = (number: number) => {
    return numeral(number).format("0,0");
  };

  useEffect(() => {
    const products = ApiProducts.Products();

    products
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="productsContainer">
      <div className="arrowLeftProducts">
        <AiOutlineLeft/>
      </div>
      <div style={{ display: "flex" }} ref={ScrollRef}>
        {products?.map((p, index) => (
          <CardProduct
            key={index}
            image={p.photo}
            description={p.descriptionShort}
            price={formatNumber(p.price)}
            priceBefore={formatNumber(p.price + 300)}
            priceX={formatNumber(p.price / 2)}
          />
        ))}
      </div>
      <div className="arrowRightProducts">
          <AiOutlineRight/>
      </div>
    </div>
  );
}
