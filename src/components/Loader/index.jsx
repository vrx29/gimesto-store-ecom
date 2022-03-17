import "./loader.css";
import ReactLoading from "react-loading";

export function Loader({ type }) {
  return (
    <div className="loader-cont">
      <ReactLoading type={type} color="#8224f9" />
    </div>
  );
}
Loader.defaultProps = {
  type: "spin",
};
