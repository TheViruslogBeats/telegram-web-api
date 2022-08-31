import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import BackButton from "../../../components/BackButton/BackButton";
import articlesPageStore from "../../../stores/articlesPageStore";
import styles from "./styles.module.scss";

const ArticlesPage = () => {
  useEffect(() => {
    articlesPageStore.getArticles();
  }, []);
  return (
    <>
      <BackButton />
      <div className={styles.articles}>
        {articlesPageStore.articles.map((article) => {
          return (
            <div className={styles.articleContainer} key={article.id}>
              <div>
                <button
                  onClick={() => {
                    
                    article.isOpened = !article.isOpened;
                    console.log(article.isOpened)
                  }}
                >
                  &#10148;
                </button>
                <h3>{article.articleTitle}</h3>
              </div>
              <p style={{"display": article.isOpened ? "block" : "none"}}>{article.articleDescription}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default observer(ArticlesPage);
