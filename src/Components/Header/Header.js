import React from "react";
import styles from "./Header.module.scss";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff"
    }
  },
  label: {
    color: "#46525e"
  }
});

export default function Header() {
  let history = useHistory();

  console.log(history.location.pathname);
  const classes = useStyles();

  let btnClasses;

  if (history.location.pathname === "/about") {
    btnClasses = { root: classes.root, label: classes.label };
  }

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLogo}>LOGO HERE1</div>
      <div className={styles.NavLinks}>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="www.google.ca">work</a>
          </li>
          <li>
            <a href="www.google.ca">products</a>
          </li>
          <li>
            <a href="www.google.ca">services</a>
          </li>
        </ul>
      </div>
      <div className={styles.HeaderButton}>
        <a href="/contact">
          <Button classes={btnClasses}>Get In Touch</Button>
        </a>
      </div>
    </div>
  );
}
