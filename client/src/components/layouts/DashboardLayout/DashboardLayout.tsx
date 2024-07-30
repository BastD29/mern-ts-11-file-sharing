import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoaderLayout from "../LoaderLayout/LoaderLayout";
import Header from "../../Header/Header";
import style from "./DashboardLayout.module.scss";

const DashboardLayout: FC = () => {
  return (
    <div className={style["dashboard-layout"]}>
      <Suspense fallback={<LoaderLayout />}>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
