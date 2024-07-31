import { FC } from "react";
import FileForm from "../../components/FileForm/FileForm2";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <FileForm />
    </div>
  );
};

export default Home;
