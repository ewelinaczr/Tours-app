import React from "react";
import { useState } from "react";
import styles from "./Nav.module.scss";
import logo from "./logo.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [openLinks, setOpenLinks] = useState(true);
  const toogleNavbar = () => {
    setOpenLinks((prSt) => !prSt);
  };

  return (
    <div className={styles.navbar}>
      <NavLink to="/all-tours?sort=all" className={styles["nav-logo"]}>
        <div>
          <img className={styles.logo} src={logo} alt="asia"></img>
        </div>
        <div className={styles.title}>Discover Asia</div>
      </NavLink>

      <div
        className={styles["nav-links"]}
        id={openLinks ? styles.hidden : ""}
        onClick={toogleNavbar}
      >
        <NavLink to="/all-tours?sort=all" className={styles.link}>
          All Tours
        </NavLink>
        <NavLink to="/login" className={styles.link}>
          Log In
        </NavLink>
        <p className={styles.link}>Profile</p>
        <p className={styles.link}>Contact</p>
      </div>
      <AiOutlineMenu onClick={toogleNavbar} size={20} className={styles.menu} />
    </div>
  );
}

export default Nav;
