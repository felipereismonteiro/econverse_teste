import IconContainer from "./components/iconContainer/iconContainer";
import { Icons } from "./components/iconContainer/components/icons";
import "./mainPageIconsCategory.styles.scss";

export default function MainPageIconsCategory() {

 return(
  <div className="MainPageIconContainer">
   {Icons.map((i, index) =>  <IconContainer key={index} image={i.image} color={i.color} name={i.name}/>)}
  </div>
 )
}