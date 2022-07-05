import React from "react";
import styles from "./Like.module.css";
import heart from "./heart.png";
// import heartActive from "./heartActive.png";
import { useState, useContext } from "react";
import { LikeContext } from "./../LikeContext/LikeContext";
// import DataBest from "./../BestsellerPreviewData";
// let arrLikes = [];

function Like(props) {
  const [favourites, setFavourite] = useContext(LikeContext);

  const [src, setLike] = useState(heart);

  let setId = (el) => {
    if (!arrLikes.includes(el)) {
      arrLikes.push(el);
      setLike(heartActive);
      // setFavourite((preciousValue) => [...preciousValue, el]);
    } else {
      for (var i = 0; i < arrLikes.length; i++) {
        if (arrLikes[i] === el) {
          arrLikes.splice(i, 1);
        }
        setLike(heart);
      }
    }
    console.log(arrLikes);
  };

  const checkLike = (event) => {
    setId(props.id);
    // setFavourite((preciousValue) => [preciousValue]);
  };

  return (
    <div className={styles.like}>
      {/* <h1>{favourites}</h1> */}
      <img
        className={favourites.src}
        onClick={favourites.checkLike}
        src={src}
        alt="like"
      ></img>
    </div>
  );
}

export default Like;
