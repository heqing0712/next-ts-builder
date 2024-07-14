import "./scss/index.scss";
import Alignment from "./componets/alignment";
import Position from "./componets/position";
import Size from "./componets/size";
import Layout from "./componets/layout";
import Effects from "./componets/effects";
export default function settings() {
  return (
    <div className="setting-container">
      <Alignment />
      <Position />
      <Size />
      <Layout />
      <Effects />
    </div>
  );
}
