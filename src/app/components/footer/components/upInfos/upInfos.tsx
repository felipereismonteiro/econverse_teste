import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import "./style/upInfos.style.scss";
import Image from "next/image";
import VisaIcon from "@/../public/VISA.png";
import elo from "@/../public/elo.png";
import alelo from "@/../public/alelo.png";
import dinners from "@/../public/dinners.png";
import ifood from "@/../public/ifood.png";
import mastercard from "@/../public/mastercard.png";
import pix from "@/../public/pix.png";
import american from "@/../public/amex.png";
import ticket from "@/../public/ticket.png";
import sodexo from "@/../public/sodexo.png";


export default function UpInfos() {
  const aboutUs = ["CONHEÇA", "COMO FUNCIONA", "INDICAÇÃO E DESCONTO"];

  const usefulInfos = [
    "FALE CONOSCO",
    "DÚVIDAS",
    "PRAZOS DE ENTREGA",
    "FORMAS DE PAGAMENTO",
    "POLÍTICAS DE PRIVACIDADE",
    "TROCAS E DEVOLUÇÕES",
  ];

  return (
    <div className="containerUpInfos">
      <div className="containerInfos">
        <h1 className="titulo">Sobre nós</h1>
        <div className="options">
          {aboutUs.map((a, index) => (
            <p key={index} className="option">
              {a}
            </p>
          ))}
        </div>
        <div className="icons">
          <FiFacebook />
          <AiOutlineInstagram />
          <AiOutlineYoutube />
        </div>
      </div>
      <div className="containerInfos">
        <h1 className="titulo">INFORMAÇÕES UTEIS</h1>
        <div className="options">
          {usefulInfos.map((a, index) => (
            <p key={index} className="option">
              {a}
            </p>
          ))}
        </div>
      </div>
      <div className="containerIconsPayment">
        <h1 className="titulo">FORMAS DE PAGAMENTO</h1>
        <div className="iconsPayment">
          <Image src={VisaIcon} alt="paymentIcon"/>
          <Image src={elo} alt="paymentIcon"/>
          <Image src={alelo} alt="paymentIcon"/>
          <Image src={dinners} alt="paymentIcon"/>
          <Image src={ifood} alt="paymentIcon"/>
          <Image src={mastercard} alt="paymentIcon"/>
          <Image src={pix} alt="paymentIcon"/>
          <Image src={american} alt="paymentIcon"/>
          <Image src={ticket} alt="paymentIcon"/>
          <Image src={sodexo} alt="paymentIcon"/>
        </div>
      </div>
      <div></div>
      <div className="novidades"></div>
    </div>
  );
}
