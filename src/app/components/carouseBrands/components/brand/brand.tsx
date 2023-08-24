import Image from "next/image";
import VtexBrand from "@/../public/vtexBrand.png";
import "./styles/brand.styles.scss";

export default function Brand() {
 return(
  <div className="ContainerBrand">
   <Image src={VtexBrand} alt="vtex brand"/>
  </div>
 )
}