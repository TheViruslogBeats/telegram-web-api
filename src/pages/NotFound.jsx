import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <>
      <div className={styles.notfound}>
        <BackButton />
        <h2>Страница не найдена!</h2>
      </div>
    </>
  );
};

export default NotFound;
