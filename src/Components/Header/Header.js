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
  const classes = useStyles();

  let btnClasses;
  let NavLinkClass;

  const path = history.location.pathname

  if (path === "/about") {
    btnClasses = { root: classes.root, label: classes.label };
  }

  if(path === "/services" || path === "/our-work") {
    NavLinkClass = [styles.NavLinks, styles.NavLinksBlack].join(' ')
  } else {
    NavLinkClass = styles.NavLinks
  }



  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLogo}>LOGO HERE1</div>
      <div className={NavLinkClass}>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/our-work">work</a>
          </li>
          <li>
            <a href="/products">products</a>
          </li>
          <li>
            <a href="/services">services</a>
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
