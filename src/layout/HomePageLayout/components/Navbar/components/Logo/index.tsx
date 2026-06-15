import { memo } from "react";
import styles from "./styles.module.scss";

function Logo() {
  return <span className={styles["logo"]}>DSA Problem Finder</span>;
}

export default memo(Logo);
