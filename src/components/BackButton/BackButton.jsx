import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button
      className={styles.backbutton}
      onClick={() => {
        goBack();
      }}
    >
      Назад
    </button>
  );
};

export default BackButton;
