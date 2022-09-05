import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import BackButton from "../../../components/BackButton/BackButton";
import photosPageStore from "../../../stores/photosPageStore";
import { FiFolder } from "react-icons/fi";
import { observer } from "mobx-react-lite";
import { API_URL } from "../../../api";

const PhotosPage = () => {
  useEffect(() => {
    photosPageStore.path = "";
    photosPageStore.setMode(1);
    photosPageStore.getPhotos();
  }, []);
  return (
    <>
      <BackButton />
      {photosPageStore.path !== "" ? (
        <button
          onClick={() => {
            photosPageStore.goBack();
          }}
          className={styles.backButton}
        >
          Назад из папки
        </button>
      ) : null}
      <div className={styles.buttonContainer}>
        {photosPageStore.paths.length > 0
          ? photosPageStore.paths.map((path) => {
              return (
                <button
                  className="menubutton"
                  onClick={() => {
                    photosPageStore.setPath(path);
                  }}
                >
                  <span>{path.replace("/", "")}</span>
                  <FiFolder/>
                </button>
              );
            })
          : null}
      </div>
      {photosPageStore.photos.length > 0 ? (
        <div className={styles.photosContainer + " " + "borderboxshadow"}>
          {photosPageStore.photos.length > 0
            ? photosPageStore.photos.map((photo) => {
                return (
                  <img
                    className={styles.photo}
                    src={API_URL + "/img/Группы" + photosPageStore.path + photo}
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

export default observer(PhotosPage);
