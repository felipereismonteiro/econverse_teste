import MoreInfos from "./components/moreInfos/moreInfos";
import UpInfos from "./components/upInfos/upInfos";
import "./footer.styles.scss";

export default function Footer() {
  return (
    <div className="footerContainer">
      <UpInfos/>
      <MoreInfos/>
    </div>
  );
}
