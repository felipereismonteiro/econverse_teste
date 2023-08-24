import Image, { StaticImageData } from "next/image";
import "./styles/iconContainer.styles.scss";

type Props = {
 image: StaticImageData;
 name: string;
 color: string;
}

export default function IconContainer({ image, name, color }: Props) {
 return(
  <div className="iconsCategoryContainer">
   <div className="insideIconContainer">
    <Image src={image} alt="containerImage"/>
   </div>
   <p style={{ color }}>{name}</p>
  </div>
 )
}