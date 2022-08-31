import React from "react";
import style from "./styles.module.scss";
import { Outlet } from "react-router-dom";

const UserLayout = ({ styles }) => {
  return (
    <div className={style.UserLayout} style={styles}>
      <Outlet />
    </div>
  );
};

export default UserLayout;
