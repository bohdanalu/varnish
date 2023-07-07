import React from "react";
import styles from "./FormStake.module.css";
import ButtonToggle from "./ButtonTogle/ButtonToggle";
import Tooltip from "./Tooltip/Tooltip";

function FormStake() {
  return (
    <form
      action="#"
      style={{ display: "flex", flexDirection: "column", gap: "25px" }}
    >
      <div className="headerForm" style={{ marginBottom: "15px" }}>
        <span className="title">Stake Vanish</span>
        <img src="/images/logo-small.png" alt="Logo" />
      </div>
      <div className={styles.frame}>
        <div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span className={styles.subtitle}>$VANISH earned</span>
            <Tooltip />
          </div>
          <div>
            <span className={styles.spanErned}>1,123,176.64</span>
            <span className={styles.subtitle}>~$3,643.54</span>
          </div>
        </div>
        <span className={styles.time}>2d 23h 48m</span>
      </div>
      <ButtonToggle />
      <div className={styles.inputBlock}>
        <div>
          <div className={styles.flex}>
            <label htmlFor="amount" className={styles.spanAmount}>
              Amount
            </label>
            <span className={styles.label}>
              Avaliable:
              <span className={styles.spanNum}> 5,000,000</span>{" "}
            </span>
          </div>
        </div>
        <input
          id="amount"
          className={styles.input}
          type="text"
          value="10,000"
        />
        <span className={styles.spanVanish}>$VANISH</span>
        <button className={styles.btnMax}>Max</button>
      </div>
      <div className={styles.blockTotal}>
        <div className={styles.frameTotal}>
          <span className={styles.subtitle}>APR</span>
          <span className={styles.total}>Up to 100%</span>
        </div>
        <div className={styles.frameTotal}>
          <span className={styles.subtitle}>Total Staked</span>
          <span className={styles.total} style={{ letterSpacing: "0.84px" }}>
            1,123,176.64
          </span>
        </div>
      </div>
      <button className="btn" type="submit">
        Stake
      </button>
    </form>
  );
}

export default FormStake;
