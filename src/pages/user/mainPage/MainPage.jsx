import React, { useState } from "react";
import MenuButton from "../../../components/MenuButton/MenuButton";
import styles from "./styles.module.scss";

const MainPage = () => {
  const [menu, setMenu] = useState([
    { className: "menubutton", to: "*", text: "Правила посещения" },
    { className: "menubutton", to: "*", text: "Оплатить занятия" },
    { className: "menubutton", to: "*", text: "Наши тьюторы" },
    { className: "menubutton", to: "*", text: "Расписание" },
    { className: "menubutton", to: "*", text: "Написать Отзыв" },
    { className: "menubutton", to: "*", text: "IT-статьи" },
    { className: "menubutton", to: "*", text: "Работы резидентов" },
    { className: "menubutton", to: "*", text: "Личный кабинет" },
    { className: "menubutton", to: "*", text: "Фото с занятий" },
  ]);
  return (
    <div className={styles.userLayout}>
      <div className="buttonContainer">
        {menu.map((Button) => {
          return <MenuButton menubutton={Button} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
