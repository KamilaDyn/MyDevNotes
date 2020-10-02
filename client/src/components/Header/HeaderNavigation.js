import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
  <ul className={styles.wrapper}>
    <li className={styles.navItem}>
      <NavLink exact className={styles.navItemLink} to="/">
        Artykuły
      </NavLink>
      <NavLink className={styles.navItemLink} to="/notes">
        Notatki
      </NavLink>
      <NavLink className={styles.navItemLink} to="/tasks">
        Zadania
      </NavLink>
    </li>
  </ul>
);

export default HeaderNavigation;
