import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import BackButton from "../../../components/BackButton/BackButton";
import styles from "./styles.module.scss";
import rulesPageStore from "../../../stores/rulesPageStore";

const RulesPage = () => {
  useEffect(() => {
    rulesPageStore.getRules();
  }, []);
  return (
    <>
      <BackButton />
      <div className={styles.infoblock + " " + "borderboxshadow"}>
        <h3>Правила посещения</h3>
        {rulesPageStore.rules.length > 0 ? (
          rulesPageStore.rules.map((rule) => {
            return (
              <div key={rule.id}>
                <h4>{rule.ruleTitle}</h4>
                <p>{rule.ruleDescription}</p>
              </div>
            );
          })
        ) : (
          <p>Правила в процессе подготовки и совсем скоро появятся здесь</p>
        )}
      </div>
    </>
  );
};

export default observer(RulesPage);
