import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import debounce from "debounce";

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff"
    }
  },
  label: {
    color: "#46525e"
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    backgroundColor: "#f9f9f9",
    color: "#000",
    width: drawerWidth,
    paddingTop: '15px',
    height: 'calc(100% - 15px)'
  }
});

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  let menuButtonColor = "inherit";
  let NavLinkClass = styles.NavLinks;
  let LinkActiveClass = styles.LinkActive1;

  let history = useHistory();

  const classes = useStyles();

  let btnClasses;

  useEffect(() => {
    setIsMobile(() => getInnerWidth());
    window.addEventListener(
      "resize",
      debounce(() => getInnerWidth()),
      200
    );
    return () => {
      window.removeEventListener(
        "resize",
        debounce(() => getInnerWidth()),
        200
      );
    };
  }, []);

  const getInnerWidth = () => {
    const isMb = window.innerWidth < 768;
    setIsMobile(isMb);
  };

  const path = history.location.pathname;

  if (path === "/about") {
    btnClasses = { root: classes.root, label: classes.label };
  }

  if (path === "/services" || path === "/our-work" || path === "/products") {
    NavLinkClass = [styles.NavLinks, styles.NavLinksBlack].join(" ");
    LinkActiveClass = styles.LinkActive2;
    menuButtonColor = "secondary";
  }

  const toggleMenu = () => {
    let isOpen = open;
    isOpen = !isOpen;
    setOpen(isOpen);
  };

  return isMobile ? (
    <div className={classes.root}>
      <AppBar position={"absolute"}>
        <Toolbar>
          <IconButton
            color={menuButtonColor}
            aria-label="menuButtonColor"
            onClick={() => toggleMenu()}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClick={() => toggleMenu()}
          >
            <List>
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Work", "/our-work"],
                ["Products", "/products"],
                ["Services", "/services"]
              ].map((link, i) => (
                <NavLink to={link[1]} key={i}>
                  <ListItem onClick={() => toggleMenu()}>
                    <ListItemText primary={link[0]} />
                  </ListItem>
                </NavLink>
              ))}
            </List>
            <div>
            <Divider />
             <NavLink exact activeClassName={LinkActiveClass} to="/">
              <div className={[styles.Logo, styles.LogoSm].join(' ')} />
              </NavLink>
            </div>
            
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLogo}>
        <NavLink exact activeClassName={LinkActiveClass} to="/">
          <div className={styles.Logo} />
        </NavLink>
      </div>
      <div className={NavLinkClass}>
        <ul>
          <li>
            <NavLink exact activeClassName={LinkActiveClass} to="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={LinkActiveClass} to="/about">
              about
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={LinkActiveClass} to="/our-work">
              work
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={LinkActiveClass} to="/products">
              products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={LinkActiveClass} to="/services">
              services
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.HeaderButton}>
        <NavLink to="/contact">
          <Button classes={btnClasses}>Get In Touch</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
