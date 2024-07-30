import { FC } from "react";
// import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={style["header"]}>
      {/* <nav className={style["header__nav"]}>
        <NavLink
          to="/auth/signin"
          className={({ isActive }) => (isActive ? style["active"] : "")}
        >
          Sign in
        </NavLink>
        <NavLink
          to="/auth/signup"
          className={({ isActive }) => (isActive ? style["active"] : "")}
        >
          Sign up
        </NavLink>
      </nav> */}
      <h2>Header</h2>
    </header>
  );
};

export default Header;
