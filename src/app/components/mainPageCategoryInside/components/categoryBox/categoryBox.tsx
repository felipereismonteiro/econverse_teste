type Props = {
 name: string
 color: string
}

import "./styles/categoryBox.styles.scss";

export default function CategoryBox({ name, color }: Props) {
 return(
  <div style={{ color }} className="boxCategory">
   {name}
  </div>
 )
}