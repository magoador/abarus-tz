import React from "react";

import styles from "./MainPage.module.scss";
import Switcher from "../../components/Switcher/Switcher";
import Adder from "../../components/Adder/Adder";
import Remote from "../../components/Remote/Remote";

const MainPage: React.FC = () => {
  return (
    <div className={styles.MainPage}>
      <div className={styles.MainPage__wrapper}>
        <Switcher />
        <Adder />
        <Remote />
      </div>
    </div>
  );
};

export default MainPage;
