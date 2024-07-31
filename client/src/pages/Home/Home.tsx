import { FC } from "react";
import UploadForm from "../../components/UploadForm/UploadForm2";
import DownloadForm from "../../components/DownloadForm/DownloadForm";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <UploadForm />
      <DownloadForm />
    </div>
  );
};

export default Home;
