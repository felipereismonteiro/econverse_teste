import Image from "next/image";
import econverselogo from "@/../public/econverse.png";
import vtexfooterlogo from "@/../public/vtextfooterlogo.png";
import "./style/moreInfos.style.scss";

export default function MoreInfos() {
  return (
    <div className="moreInfos">
      <div className="copyright">
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
      </div>
      <div>
        <Image src={econverselogo} alt="econverselogofooter" />
        <Image src={vtexfooterlogo} alt="vtexfooterlogo" />
      </div>
    </div>
  );
}
