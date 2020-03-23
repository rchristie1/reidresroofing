import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Contact from "./Containers/Contact/Contact";


import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.Container}>
      <Header className={styles.Header} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer className={styles.Footer} />
    </div>
  );
}

export default App;