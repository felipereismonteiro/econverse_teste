"use client";

import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./carouselBrands.styles.scss";
import Brand from "./components/brand/brand";

export default function CarouselBrands() {
  const carouselRef = useRef<null | HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ position: 'relative', display: 'flex', alignContent: 'center'}}>
      <button className="arrowLeft" onClick={scrollLeft}>
        <AiOutlineLeft />
      </button>
      <div className="carouselBrandsContainer" ref={carouselRef}>
        <div className="CarouselBrandsContainer">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </div>
      </div>
      <button className="arrowRight" onClick={scrollRight}>
        <AiOutlineRight />
      </button>
    </div>
  );
}
