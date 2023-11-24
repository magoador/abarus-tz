import React from "react";
import Switch from "@material-ui/core/Switch";

import styles from "./Switcher.module.scss";
import alert__info from "../../assets/img/alert__info.svg";
import alert__close from "../../assets/img/alert__close.svg";

export default function Switches() {
  const [isAlert, setIsAlert] = React.useState(false);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={styles.Switcher}>
      <div className={styles.Switcher__wrapper}>
        <div className={styles.Switcher__row}>
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            // disabled
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          {state.checkedB ? (
            <div className={styles.SwitcherOn}>Служба включена</div>
          ) : (
            <div className={styles.SwitcherOff}>Служба выключена</div>
          )}
        </div>
        <div className={styles.Switcher__line}></div>
        {isAlert && (
          <div className={styles.Switcher__alert}>
            <div className={styles.Switcher__alertLogo}>
              <img src={alert__info} alt="Инфо" />
            </div>
            <div className={styles.Switcher__alertText}>
              <div className={styles.Switcher__alertMText}>
                Запуск службы не возможен
              </div>
              <div className={styles.Switcher__alerMText}>
                Настройте параметры
              </div>
            </div>
            <div className={styles.Switcher__alertClose}>
              <button>
                <img src={alert__close} alt="Закрыть предупреждение" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
