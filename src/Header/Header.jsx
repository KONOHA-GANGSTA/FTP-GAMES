import React from "react";
import styles from "./Header.module.css";
import { Letter } from "./Letter/Letter";

export const Header = ({str}) => {
  return (
    <div className={styles.header}>
      {str.split("").map((el, index) => {
        return <Letter char={el} key={index}/>;
      })}
    </div>
  );
};
