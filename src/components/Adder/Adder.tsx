import React from "react";

import styles from "./Adder.module.scss";
import adderd__add from "../../assets/img/adderd__add.svg";

const Adder: React.FC = () => {
  return (
    <div className={styles.Adder}>
      <div className={styles.Adder__wrapper}>
        <div className={styles.Adder__row}>
          <div className={styles.Adder__Text}>Добавить сегмент</div>
          <div className={styles.Adder__button}>
            <button>
              <img src={adderd__add} alt="Добавить" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adder;
