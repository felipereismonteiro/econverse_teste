import "./styles/searchHeader.styles.scss";
import Image from "next/image";
import VtexLogo from "@/../public/vtexlogo.png";
import { CiSearch } from "react-icons/ci";
import { BsBox2, BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function SearchHeader() {
  return (
    <div className="container">
      <Image src={VtexLogo} alt="VtexLogo" />
      <div className="containerInput">
        <input
          className="inputSearch"
          type="text"
          placeholder="O que você esta buscando?"
        />
        <CiSearch className="containerInputIcon" />
      </div>
      <div className="iconsInside">
        <BsBox2 className="icon"/>
        <AiOutlineHeart className="icon"/>
        <CgProfile className="icon"/>
        <BsCart3 className="icon"/>
      </div>
    </div>
  );
}
