import React from "react";
import Image from "next/image";
import BannerImage from "@/../public/promopng.png";
import "./promoBanner.styles.scss";
import gradient from "@/../public/gradient.png";

export default function PromoBanner() {
  return (
    <div className="containerPromoBanner">
      <Image
        className="bannerImageGradient bannerImageGradient"
        src={BannerImage}
        alt="promo image"
      />
      <Image src={gradient} alt="gradient" className="gradient"/>
      <div className="promoInfos">
        <h1>
          Venha conhecer nossas <br /> Promoções
        </h1>
        <p>50% Off nos produtos</p>
        <button>Ver produto</button>
      </div>
    </div>
  );
}
