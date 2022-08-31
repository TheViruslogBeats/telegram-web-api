import React, { useState } from "react";
import MenuButton from "../../../components/MenuButton/MenuButton";
import telegramStore from "../../../stores/telegram-store";
import styles from "./styles.module.scss";

const MainPage = () => {
  const [menu, setMenu] = useState([
    { id: 1, className: "menubutton", to: "rules", text: "Правила посещения" },
    { id: 2, className: "menubutton", to: "payment", text: "Оплатить занятия" },
    { id: 3, className: "menubutton", to: "tutors", text: "Наши тьюторы" },
    { id: 4, className: "menubutton", to: "schedule", text: "Расписание" },
    { id: 5, className: "menubutton", to: "*", text: "Написать Отзыв" },
    { id: 6, className: "menubutton", to: "articles", text: "IT-статьи"},
    { id: 7, className: "menubutton", to: "*", text: "Работы резидентов", onClick: async () => {
      console.log("Отправил2!");
      await telegramStore.tg.sendData("VirusBeats")
    }  },
    { id: 8, className: "menubutton", to: "*", text: "Личный кабинет" },
    { id: 9, className: "menubutton", to: "*", text: "Фото с занятий" },
  ]);
  return (
    <div className={styles.buttonContainer}>
      {menu.map((Button) => {
        return <MenuButton menubutton={Button} key={Button.id} />;
      })}
    </div>
  );
};

export default MainPage;
