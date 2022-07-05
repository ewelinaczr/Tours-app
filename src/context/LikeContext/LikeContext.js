import React, { createContext, useState } from "react";
import heart from "./../../components/like/heart.png";
import heartActive from "./../../components/like/heartActive.png";
// import styles from "./../Like/Like.module.css";

const LikeContext = createContext();

export function LikeProvider({ children }) {
  const [likes, setLikes] = useState([]);
  const [src, setSrc] = useState(heart);

  const toggleToLikes = (id) => {
    if (!likes.includes(id)) {
      setLikes((prevLikes) => [...prevLikes, id]);
    } else if (likes.includes(id)) {
      console.log("include");
      for (var i = 0; i < likes.length; i++) {
        if (likes[i] === id) likes.splice(i, 1);
      }
      setLikes(likes);
    }
  };

  const toggleSrc = (id) => {
    if (!likes.includes(id)) {
      setSrc("heartActive");
      console.log(src);
    } else if (likes.includes(id)) {
      console.log("include");
      for (var i = 0; i < likes.length; i++) {
        if (likes[i] === id) likes.splice(i, 1);
      }
      setSrc(heart);
    }
  };

  return (
    <LikeContext.Provider value={{ likes, toggleSrc, toggleToLikes }}>
      {children}
    </LikeContext.Provider>
  );
}

export default LikeContext;

// let icon = heart;
// let idsArr = [];

// export const LikeProvider = (props) => {
// const [src, setSrc] = useState(heart);

// const [inFav, setInFav] = useState(false);

// let checkLike = (event, id) => {
//   if (!idsArr.includes(id)) {
//     idsArr.push(id);
//     // setInFav(true);
//   } else {
//     for (var i = 0; i < idsArr.length; i++) {
//       if (idsArr[i] === id) idsArr.splice(i, 1);
//     }
//     // setInFav(false);
//   }
//   console.log(idsArr);
// };

// let checkLike = (id) => {
//   if (!idsArr.includes(id)) idsArr.push(id);
//   else {
//     for (var i = 0; i < idsArr.length; i++) {
//       if (idsArr[i] === id) idsArr.splice(i, 1);
//     }
//   }
//   console.log(idsArr);
// };
// console.log(inFav);
// console.log(idsArr);

// const src = (id) => {
//   let src = inFav ? heartActive : heart;
//   console.log(src);
// };

//   const itemsContext = {
//     ids: idsArr,
//     // src: src,
//     checkLike: checkLike,
//     // setIcon: setIcon,
//   };

//   return (
//     <LikeContext.Provider value={itemsContext}>
//       {props.children}
//     </LikeContext.Provider>
//   );
// };
