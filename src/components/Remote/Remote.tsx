import React from "react";

import styles from "./Remote.module.scss";
import remote__edit from "../../assets/img/remote__edit.png";
import remote__delete from "../../assets/img/remote__delete.png";

const Remote: React.FC = () => {
  return (
    <div className={styles.Remote}>
      <div className={styles.Remote__wrapper}>
        <div className={styles.remote__bText}>Удаленные сегменты</div>
        <div className={styles.remote__table}>
          <div className={styles.remote__rowInfo}>
            <div className={styles.remote__ipInfo}>IP-адрес</div>
            <div className={styles.remote__portInfo}>Порт</div>
          </div>
          <div className={styles.remote__line}></div>
          <div className={styles.remote__row}>
            <div className={styles.remote__ip}>1.1.1.1</div>
            <div className={styles.remote__port}>90</div>
            <div className={styles.remote__edit}>
              <button>
                <img src={remote__edit} alt="Редактировать" />
              </button>
            </div>
            <div className={styles.remote__delete}>
              <button>
                <img src={remote__delete} alt="Удалить" />
              </button>
            </div>
          </div>
          <div className={styles.remote__line}></div>
          <div className={styles.remote__row}>
            <div className={styles.remote__ip}>1.1.1.1</div>
            <div className={styles.remote__port}>90</div>
            <div className={styles.remote__edit}>
              <button>
                <img src={remote__edit} alt="Редактировать" />
              </button>
            </div>
            <div className={styles.remote__delete}>
              <button>
                <img src={remote__delete} alt="Удалить" />
              </button>
            </div>
          </div>
          <div className={styles.remote__line}></div>
          <div className={styles.remote__row}>
            <div className={styles.remote__ip}>1.1.1.1</div>
            <div className={styles.remote__port}>90</div>
            <div className={styles.remote__edit}>
              <button>
                <img src={remote__edit} alt="Редактировать" />
              </button>
            </div>
            <div className={styles.remote__delete}>
              <button>
                <img src={remote__delete} alt="Удалить" />
              </button>
            </div>
          </div>
          <div className={styles.remote__line}></div>
          {/* <div className={styles.remote__empty}>
            Удаленные сегменты не заданы
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Remote;
