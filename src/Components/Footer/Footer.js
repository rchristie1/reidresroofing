import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import styles from "./Footer.module.scss";

// import x from '../../Assets/Icons/hammer-solid.svg'

export default function Footer() {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.ContainerTop}>
        <div className={styles.Location}>
          <div className={styles.Logo} />
          <div className={styles.Info}>
            <span>Reid’s Residential Roofing</span>
            <span>123 Reids Roofing Ave</span>
            <span>Toronto, Ontario</span>
          </div>
        </div>
        <div className={styles.Grid}>
          <div className={styles.List}>
            <h3>About</h3>
            <div className={styles.GutterBottom}>
              <a href="/">Who We Are</a>
              <a href="/">Blog</a>
              <a href="/">Careers</a>
            </div>
          </div>
          <div className={styles.List}>
            <h3>Work</h3>
            <div className={styles.GutterBottom}>
              <a href="/">Our Process</a>
              <a href="/">Client Portfolio</a>
              <a href="/">Products We Use</a>
              <a href="/">Testimonial</a>
            </div>
          </div>
          <div className={styles.List}>
            <h3>Contact</h3>
            <div className={styles.GutterBottom}>
              <a href="/"><span>Jeff Reid</span><br /><span>(298) 980–7663</span></a>
              <a href="/"><span>Tim Reid</span><br /><span>(298) 355–9000</span></a>
            </div>
          </div>
          <div className={styles.List}>
            <h3>Follow Us</h3>
            <div className={[styles.GutterBottom, styles.Social].join(" ")}>
              <a href="https://www.facebook.com/reidsresidentialroofing/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Divider} />
      <div className={styles.Copyright}>
        © 2020 Reid’s Residential Roofing. All Rights Reserved
      </div>
    </div>
  );
}
