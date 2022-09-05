import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import BackButton from "../../../components/BackButton/BackButton";
import photosPageStore from "../../../stores/photosPageStore";
import { observer } from "mobx-react-lite";
import { API_URL } from "../../../api";

const ResWorksPage = () => {
  useEffect(() => {
    photosPageStore.path = "";
    photosPageStore.setMode(2);
    photosPageStore.getPhotos();
  }, []);
  return (
    <>
      <BackButton />
      {photosPageStore.photos.length > 0 ? (
        <div className={styles.photosContainer + " " + "borderboxshadow"}>
          {photosPageStore.photos.length > 0
            ? photosPageStore.photos.map((photo) => {
                return (
                  <img
                    className={styles.photo}
                    src={API_URL + photo}
                    alt={photo}
                  ></img>
                );
              })
            : null}
        </div>
      ) : null}
    </>
  );
};

export default observer(ResWorksPage);
