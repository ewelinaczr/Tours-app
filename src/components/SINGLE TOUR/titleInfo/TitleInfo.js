// import Nav from "../Nav";
import styles from "./TitleInfo.module.scss";
import React from "react";
import Labels from "./../../labels/Labels";

function TitleInfo(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>{props.tour.destination}</div>
        <div>{props.tour.subTitle}</div>
        {/* Labels */}
        <div className={styles.labels}>
          <Labels
            bestseller={props.tour.bestseller}
            lastMinute={props.tour.lastMinute}
            id={props.tour.id}
          />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.location}>
          <div className={styles.icons}>
            <i className="fas fa-regular fa-star fa-4x"></i>
            <div className={styles.icon}>{props.tour.rating} rating</div>
          </div>
          <div className={styles.icons}>
            <i className="fas fa-solid fa-cloud-sun"></i>
            <div className={styles.icon}>TEMPERATURE</div>
          </div>
          <div className={styles.icons}>
            <i className="fas fa-solid fa-plane"></i>
            <div className={styles.icon}>{props.tour.flyghtduration} hours</div>
          </div>
          <div className={styles.icons}>
            <i className="fas fa-solid fa-location-arrow"></i>
            <div className={styles.icon}>{props.tour.distance} km</div>
          </div>
        </div>
        <div className={styles.callendar}>
          <div className={styles.icons}>
            <i className="fas fa-solid fa-calendar"></i>
            <div className={styles.icon}>Check in: 2022-08-10</div>
          </div>
          <div className={styles.icons}>
            <i className="fas fa-solid fa-calendar"></i>
            <div className={styles.icon}>Check out: 2022-08-30</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleInfo;
