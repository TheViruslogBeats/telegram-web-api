import { useState } from "react";
import BackButton from "../../../components/BackButton/BackButton";
import MenuButton from "../../../components/MenuButton/MenuButton";
import styles from "./styles.module.scss";

const PaymentPage = () => {
  const [menu, setMenu] = useState([
    { id: 1, className: "menubutton", to: "rules", text: "СБП" },
    { id: 2, className: "menubutton", to: "payment", text: "Картой" },
    { id: 3, className: "menubutton", to: "payment", text: "Картой в телеграм" },
  ]);
  return (
    <>
      <BackButton />
      <div className={styles.buttonContainer}>
        {menu.map((Button) => {
          return <MenuButton menubutton={Button} key={Button.id} />;
        })}
      </div>
    </>
  );
};

export default PaymentPage;
