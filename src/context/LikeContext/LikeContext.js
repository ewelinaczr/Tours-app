import React, { createContext, useState } from "react";

const LikeContext = createContext();

export function LikeProvider({ children }) {
  const [likes, setLikes] = useState([]);

  const toggleToLikes = (id) => {
    if (!likes.includes(id)) {
      setLikes((prevLikes) => [...prevLikes, id]);
    } else if (likes.includes(id)) {
      const newLikes = [...likes];
      for (var i = 0; i < newLikes.length; i++) {
        if (newLikes[i] === id) newLikes.splice(i, 1);
        setLikes(newLikes);
      }
    }
  };

  return (
    <LikeContext.Provider value={{ likes, setLikes, toggleToLikes }}>
      {children}
    </LikeContext.Provider>
  );
}

export default LikeContext;
