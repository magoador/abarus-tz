import React from "react";

import styles from "./MainPage.module.scss";
import Switcher from "../../components/Switcher/Switcher";

const MainPage: React.FC = () => {
  return (
    <div className={styles.MainPage}>
      <div className={styles.MainPage__wrapper}>
        <Switcher />
      </div>
    </div>
  );
};

export default MainPage;
