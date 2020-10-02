import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import logoImage from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={logoImage} alt="logo My_DevNote" />
    <HeaderNavigation />
    <Button onClick={openModalFn} headerButton>
      Dodaj
    </Button>
  </header>
);

export default Header;
