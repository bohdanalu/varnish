import React from "react";
import styles from "./Social.module.css";
import { social } from "../../../constants";

function Social() {
  return (
    <ul className={styles.socialLinks}>
      {social.map((socialItem) => (
        <li className={styles.socialItem} key={socialItem.id}>
          <a href="#">
            <img src={socialItem.src} alt={socialItem.title} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
