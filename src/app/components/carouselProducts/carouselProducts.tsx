"use client";

import { ApiProducts } from "@/app/api/products";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CardProduct from "./components/cardProduct/cardProduct";
import "./carouselProducts.styles.scss";

export default function CarouselProducts() {
  const [products, setProducts] = useState<Products | undefined>();
  const carouselRef = useRef<null | HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
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
    <div className="MainProductsContainer">
      <div className="arrowLeftProducts" onClick={scrollLeft}>
        <AiOutlineLeft />
      </div>
      <div className="productsContainer" ref={carouselRef}>
        <div style={{ display: "flex" }}>
          {products?.map((p, index) => (
            <CardProduct
              key={index}
              image={p.photo}
              name={p.productName}
              description={p.descriptionShort}
              price={p.price}
              priceBefore={p.price + 300}
              priceX={p.price / 2}
            />
          ))}
        </div>
      </div>
      <div className="arrowRightProducts" onClick={scrollRight}>
        <AiOutlineRight />
      </div>
    </div>
  );
}
