import React, { useEffect } from "react";
import styles from "./../like/Like.module.scss";
import heart from "./../like/heart.png";
import heartActive from "./../like/heartActive.png";
import { useState, useContext } from "react";
import LikeContext from "./../../context/LikeContext/LikeContext";
import { BsFillSuitHeartFill } from "react-icons/bs";
// import DataBest from "./../BestsellerPreviewData";
// let arrLikes = [];

const Like = (props) => {
  const { toggleToLikes } = useContext(LikeContext);
  // const ctx = useContext(LikeContext);

  // const [src, setLike] = useState(heart);

  // let setId = (el) => {
  //   if (!arrLikes.includes(el)) {
  //     arrLikes.push(el);
  //     setLike(heartActive);
  // ;
  //   } else {
  //     for (var i = 0; i < arrLikes.length; i++) {
  //       if (arrLikes[i] === el) {
  //         arrLikes.splice(i, 1);
  //       }
  //       setLike(heart);
  //     }
  //   }
  // };
  // console.log(arrLikes);

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
    // console.log(id);
    togleFavHandler();
    toggleToLikes(props.id);
    // setId(id);
    // ctx.checkLike(event.target, id);
  };

  // const srcHandle = (event) => {
  //   let id = props.id;
  //   ctx.src(event.target, id);
  // };

  return (
    <div className={styles.like}>
      {/* <h1>{favourites}</h1> */}
      {/* <img
        className={styles.heart}
        onClick={clickHandler}
        src={inFav ? heartActive : heart}
        // src={srcHandle}
        alt="like"
      ></img> */}
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
