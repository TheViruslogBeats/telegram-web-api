import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import BackButton from "../../../components/BackButton/BackButton";
import tutorsPageStore from "../../../stores/tutorsPageStore";
import styles from "./styles.module.scss";

const TutorsPage = () => {
  useEffect(() => {
    tutorsPageStore.getTutors();
  }, []);
  return (
    <>
      <BackButton />
      <ul className={styles.tutorsList}>
        {tutorsPageStore.tutors.length > 0 ? (
          tutorsPageStore.tutors.map((tutor) => {
            return (
              <li key={tutor.id}>
                <img src={tutor.imgLink} alt="avatar" />
                <div>
                  <div>
                    <h4>{tutor.lastName}</h4>
                    <h4>{tutor.firstName} </h4>
                    <h4>{tutor.middleName}</h4>
                  </div>
                  <h5>{tutor.description}</h5>
                </div>
              </li>
            );
          })
        ) : (
          <h3>Тьюторы отсутствуют</h3>
        )}
      </ul>
    </>
  );
};

export default observer(TutorsPage);
