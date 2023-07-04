import React, { useState } from "react";
import styles from "./FormConverter.module.css";
import { currencies, percents } from "../../constants";
import DropDown from "./DropDown/DropDown";

function FormConverter() {
  // const [selectedValue, setSelectedValue] = useState({
  //   img: `${currencies[0].img}`,
  //   code: `${currencies[0].code}`,
  // });
  const [isOpen, setIsOpen] = useState({
    from: false,
    to: false,
  });
  // const [options, setOptions] = useState([]);

  const toggleDropdown = (id) => {
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [id]: !prevIsOpen[id],
    }));
  };

  return (
    <form className={styles.form}>
      <div className={styles.headerForm}>
        <span className={styles.title}>You send</span>
        <img src="/images/logo-small.png" alt="Logo" />
      </div>

      <div className={styles.inputBlock}>
        <label className={styles.label}>Select source currency</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Ethereum (ETH)"
          // value={`${inputValue.name} (${inputValue.code})`}
          style={{ textAlign: "right" }}
        />
        <DropDown
          id="from"
          options={currencies}
          isOpen={isOpen.from}
          // selectedValue={selectedValue}
          toggleDropdown={() => toggleDropdown("from")}
        />
      </div>

      <div className={styles.inputBlock}>
        <div>
          <div className={styles.flex}>
            <label className={styles.label}>Enter amount</label>
            <span className={styles.label}>
              Avaliable: <span className={styles.span}> 00</span>{" "}
            </span>
          </div>
        </div>
        <input className={styles.input} type="text" value="50" />
        <button className={styles.btnMax}>Max</button>
        <ul className={styles.listPer}>
          {percents.map((per) => (
            <li key={per} className={styles.itemPer}>
              <span>{per}</span>
              <span>%</span>
            </li>
          ))}
        </ul>
      </div>
      <span className={styles.title} style={{ marginBottom: "15px" }}>
        You Get
      </span>
      {/* <ToInput label="Select destination currency" /> */}
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          type="text"
          placeholder="Ethereum (ETH)"
          // value={`${inputValue.name} (${inputValue.code})`}
          style={{ textAlign: "right" }}
        />
        <label className={styles.label}>Select destination currency</label>

        <DropDown
          id="to"
          options={currencies}
          isOpen={isOpen.to}
          // selectedValue={selectedValue}
          toggleDropdown={() => toggleDropdown("to")}
        />
      </div>
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter wallet address"
        />
        <label className={styles.label}>Recipient Wallet Address</label>
      </div>
      {/* <Total label="FEE" /> */}
      <div className={styles.inputBlock}>
        <div className={styles.flex}>
          <div className={styles.flex} style={{ gap: "17px" }}>
            <label
              className={styles.label}
              style={{ textTransform: "uppercase" }}
            >
              Fee
            </label>
            <button className={styles.btnInfo} type="button"></button>
          </div>
          <span className={styles.span}>
            098 <span className={styles.span}> ETH</span>{" "}
          </span>
        </div>

        <div
          className={styles.input}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Total</span>
          <span>100</span>
        </div>
      </div>
      <input type="submit" className={styles.btn} value="Transfer now" />
    </form>
  );
}

export default FormConverter;
