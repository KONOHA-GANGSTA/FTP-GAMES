import { React, useEffect, useState } from "react";
import styles from "./Letter.module.css";
import cn from "classnames";

export const Letter = ({ char }) => {
  const [shine, setShine] = useState(true);
  const shimmer = () => {
    setShine(Math.random() + 0.45 > 0.5);
  };
 
  useEffect(()=>{
    setInterval(shimmer, 100);
  },[])

  return (
    <div
      className={cn(styles.font, {
        [styles.shine]: shine,
        [styles.fade]: !shine,
      })}
    >
      {char}
    </div>
  );
};
