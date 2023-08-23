import "./styles/secondheader.styles.scss";
import { BsShieldCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineCreditCard } from "react-icons/ai";

export default function InsideHeader() {
  return (
    <div className="mainContainer">
      <div className="iconContainer">
        <BsShieldCheck className="iconSecondHeader" />
        <h2 className="textIcon">
          <span className="highlightText">Frete grátis</span> acima de R$ 200
        </h2>
      </div>
      <div className="iconContainer">
        <TbTruckDelivery className="iconSecondHeader" />
        <h2 className="textIcon">
          Compra <span className="highlightText">100% segura</span>
        </h2>
      </div>
      <div className="iconContainer">
        <AiOutlineCreditCard className="iconSecondHeader" />
        <h2 className="textIcon">
          <span className="highlightText">Parcele</span> suas compras
        </h2>
      </div>
    </div>
  );
}
