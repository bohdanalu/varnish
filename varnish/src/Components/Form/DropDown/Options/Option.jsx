import React from "react";
import styles from "./Option.module.css";
function Option({ item }) {
  return (
    <>
      <li className={styles.option}>
        <img src={item.img} alt={item.name} />
        <span> {item.code}</span>
      </li>
    </>
  );
}

export default Option;
