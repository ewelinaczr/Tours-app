import styles from "./TitleInfo.module.scss";
import React from "react";
// COMPONENTS
import Labels from "./../../labels/Labels";
// ICONS
import { IoAirplaneOutline } from "react-icons/io5";
import { GiPathDistance } from "react-icons/gi";
import { AiOutlineStar } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";

function TitleInfo(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.dest}>{props.tour.destination}</div>
        <div>{props.tour.subTitle}</div>
        {/* Labels */}
        {/* <div className={styles.labels}>
          <Labels
            bestseller={props.tour.bestseller}
            lastMinute={props.tour.lastMinute}
            id={props.tour.id}
          />
        </div> */}
      </div>
      <div className={styles.info}>
        <div className={styles.location}>
          <div className={styles.icons}>
            <AiOutlineStar size={20} />
            <div className={styles.icon}>{props.tour.rating} rating</div>
          </div>
          <div className={styles.icons}>
            <IoAirplaneOutline size={20} />
            <div className={styles.icon}>{props.tour.flyghtduration} hours</div>
          </div>
          <div className={styles.icons}>
            <GiPathDistance size={20} />
            <div className={styles.icon}>{props.tour.distance} km</div>
          </div>
        </div>
        <div className={styles.callendar}>
          <div className={styles.icons}>
            <BsCalendarEvent size={20} />
            <div>
              <div className={styles.icon}>Check in: 2022-08-10</div>
              <div className={styles.icon}>Check out: 2022-08-30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleInfo;
