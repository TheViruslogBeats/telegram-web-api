import React from "react";
import BackButton from "../../../components/BackButton/BackButton";
import styles from "./styles.module.scss";

const SchedulePage = () => {
  return (
    <>
      <BackButton />
      <div className={styles.infoblock}>
        <h3>Расписание</h3>
        <h4>Расписание на 2022-2023 учебный год будет сформированно в августе 2022г.</h4>
      </div>
    </>
  );
};

export default SchedulePage;
