import { FC } from "react";
import UploadForm from "../../components/UploadForm/UploadForm3";
import FileList from "../../components/FileList/FileList";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <UploadForm />
      <FileList />
    </div>
  );
};

export default Home;
