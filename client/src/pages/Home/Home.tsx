import { FC } from "react";
import UploadForm from "../../components/UploadForm/UploadForm2";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <UploadForm />
    </div>
  );
};

export default Home;
