import React from "react";
import Option from "./Options/Option";
import styles from "./DropDown.module.css";

function DropDown({
  id,
  options,
  isOpen,
  toggleDropdown,
  selectedValue,
  handleItemClick,
}) {
  return (
    <div
      className={`${styles.dropdown} ${
        id === "from" ? styles.from : styles.to
      }`}
    >
      <div
        id="id"
        className={`${styles.dropdownToggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        <img src="/images/icons/Ethereum.png" alt="Currency Icon" />
        <span>ETH</span>
      </div>
      {isOpen && (
        <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : ""}`}>
          {options.map((item) => (
            <Option
              key={item.code}
              item={item}
              handleItemClick={handleItemClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
