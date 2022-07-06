import React from "react";
// STYLES
import styles from "./Labels.module.scss";
// COMPONENTS
import Like from "../like/Like.js";
import LabelBestseller from "./../labelBestseller/LabelBestseller.js";
import LabelLastMinute from "./../labelLastMinute/LabelLastMinute";

function Labels(props) {
  return (
    <div className={styles.labels}>
      <Like id={props.id}></Like>
      {props.lastMinute && <LabelLastMinute></LabelLastMinute>}
      {props.bestseller && <LabelBestseller></LabelBestseller>}
    </div>
  );
}

export default Labels;
