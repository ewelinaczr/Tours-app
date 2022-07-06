import React, { useEffect } from "react";
import { useState, useContext } from "react";
// STYLES
import styles from "./../like/Like.module.scss";
// ICONS
import { BsFillSuitHeartFill } from "react-icons/bs";
// CONTEXT
import LikeContext from "./../../context/LikeContext/LikeContext";

const Like = (props) => {
  const { toggleToLikes } = useContext(LikeContext);
  const [inFav, setInFav] = useState(false);
  const [size, setSize] = useState(20);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setSize(17);
    } else {
      setSize(20);
    }
  }, []);

  const togleFavHandler = () => {
    setInFav((prevFav) => !prevFav);
  };

  const clickHandler = (event) => {
    let id = props.id;
    togleFavHandler();
    toggleToLikes(id);
  };

  return (
    <div className={styles.like}>
      <BsFillSuitHeartFill
        size={size}
        style={inFav ? { color: "red" } : { color: " white" }}
        onClick={clickHandler}
        className={styles.heart}
      />
    </div>
  );
};

export default Like;
