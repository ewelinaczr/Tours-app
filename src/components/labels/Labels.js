import React from "react";
import styles from "./Labels.module.scss";
import Like from "../like/Like.js";
import LabelBestseller from "./../labelBestseller/LabelBestseller.js";
import LabelLastMinute from "./../labelLastMinute/LabelLastMinute";

// import DataBest from "./../BestsellerPreviewData";

function Labels(props) {
  // console.log(props.bestseller);
  // console.log(props.id);
  // if (props.bestseller) console.log("hej");

  return (
    <div className={styles.labels}>
      <Like id={props.id}></Like>
      {props.lastMinute && <LabelLastMinute></LabelLastMinute>}
      {props.bestseller && <LabelBestseller></LabelBestseller>}
    </div>
  );
}

export default Labels;
