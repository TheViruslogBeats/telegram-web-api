import React, { useState } from "react";
import {
  BiPhotoAlbum,
  BiUser,
  BiFile,
  BiReply,
  BiSpreadsheet,
  BiSmile,
  BiCreditCard,
  BiBell,
} from "react-icons/bi";
import MenuButton from "../../../components/MenuButton/MenuButton";
import telegramStore from "../../../stores/telegram-store";
import styles from "./styles.module.scss";

const MainPage = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      className: "menubutton",
      to: "rules",
      text: "Правила посещения",
      svg: <BiBell />,
    },
    {
      id: 2,
      className: "menubutton",
      to: "payment",
      text: "Оплатить занятия",
      svg: <BiCreditCard />,
    },
    {
      id: 3,
      className: "menubutton",
      to: "tutors",
      text: "Наши тьюторы",
      svg: <BiSmile />,
    },
    {
      id: 4,
      className: "menubutton",
      to: "schedule",
      text: "Расписание",
      svg: <BiSpreadsheet />,
    },
    {
      id: 5,
      className: "menubutton",
      to: "*",
      text: "Написать Отзыв",
      svg: <BiReply />,
    },
    {
      id: 6,
      className: "menubutton",
      to: "articles",
      text: "IT-статьи",
      svg: <BiFile />,
    },
    {
      id: 7,
      className: "menubutton",
      to: "resWorks",
      text: "Работы резидентов",
      svg: <BiPhotoAlbum />,
    },
    {
      id: 8,
      className: "menubutton lkbutton",
      to: "profile",
      text: "Личный кабинет",
      svg: <BiUser />,
    },
    {
      id: 9,
      className: "menubutton",
      to: "photos",
      text: "Фото с занятий",
      svg: <BiPhotoAlbum />,
    },
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
