import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.scss'

const MenuButton = (props) => {
  return (
    <NavLink className={props.menubutton.className} to={props.menubutton.to}>
      <span>{props.menubutton.text}</span>
    </NavLink>
  );
};

export default MenuButton;
