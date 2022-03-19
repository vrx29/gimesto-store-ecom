import "./loader.css";
import ReactLoading from "react-loading";

export function Loader({ type, color, height, width }) {
  return (
    <div className="loader-cont">
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
}
Loader.defaultProps = {
  type: "spin",
  color: "#8224f9",
  height: "30px",
  width: "30px",
};
