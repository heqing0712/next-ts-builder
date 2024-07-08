import "./scss/index.scss";
import Alignment from "./componets/alignment";
import Position from "./componets/position";

export default function settings() {
  return (
    <div className="setting-container">
      <Alignment />
      <Position />
    </div>
  );
}
