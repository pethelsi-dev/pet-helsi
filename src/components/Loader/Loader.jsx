import { ThreeDots } from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="60"
      width="60"
      color="#1e88e5"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={style.loader}
    />
  );
}
