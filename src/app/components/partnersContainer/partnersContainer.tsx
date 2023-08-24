import Image from "next/image";
import partnersBanner from "@/../public/partners.png";
import partnersGradient from "@/../public/gradientpartners.png";
import "./partnersContainer.styles.scss";

export default function PartnersContainer() {
  return (
    <div className="partnersContainer">
      <div className="partnersBox">
        <Image className="banner" src={partnersGradient} alt="partners gradient" />
      </div>
      <div className="infos">
        <h1>Parceiros</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>CONFIRA</button>
      </div>
    </div>
  );
}
