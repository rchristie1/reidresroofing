import React from "react";
import styles from "./Home.module.scss";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {heading} from '../../Components/UI/CommonElements'

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

export default function Home() {
  const classes = useStyles();
  const servicesOffered = [
    { title: "ReRoof", desc: "" },
    { title: "Roof Inspection", desc: "" },
    { title: "Sun Tunnel Installation", desc: "" },
    { title: "New Construction", desc: "" },
    { title: "Roof Repairs", desc: "" },
    { title: "Skylight Installation", desc: "" }
  ];
  
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.Banner}>
        <div className={styles.Content}>
          <div className={styles.Headline}>
            Reid’s Residential Roofing is a team of highly trained professionals
            for all your roofing needs.
          </div>
          <div className={styles.SubHeadline}>
            A team you can trust. We have you covered.
          </div>
        </div>
      </div>
      <div className={styles.Company}>
        <div className={styles.CompanyContent}>
          {heading("Who We Are")}
          <div className={styles.CompanyBody}>
            Reid’s Residential Roofing is a family owned and operated business
            located in Toronto, we provide residential roofing services for
            clients around the Greater Toronto Area.{" "}
          </div>
          <Button>Get In Touch</Button>
        </div>
        <div className={styles.CompanyImage} />
      </div>
      <div className={styles.Services}>
        <div className={styles.ServicesContent}>
          {heading("Our Services & Expertise")}
          <div className={styles.ServicesBody}>
            Experienced Roofers At Your Service
          </div>
          <Button>View All Sevices</Button>
        </div>
        <div className={styles.ServicesOffered}>
          {servicesOffered.map((service, i) => (
            <div key={i}>{service.title}</div>
          ))}
        </div>
      </div>
      <div className={styles.Products}>
        <div className={styles.ProductList}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.ProductContent}>
          {heading("Products")}
          <div className={styles.ProductHeading}>
            Experience Quality Materials, These Are The Brands We Trust
          </div>
          <div className={styles.ProductBody}>
            We pride ourselves on quality workmanship that exceeds the rest,
            thats why we choose to use the best products for your home. Every
            product comes with their manufacturing warranty to ensure quality
            meets your expectations.
          </div>
          <Button>View Our Brands</Button>
        </div>
      </div>
      <div className={styles.Process}>
        <div className={styles.ProcessContent}>
          {heading("Our Process")}
          <div className={styles.ProcessHeading}>
            Preview Your Personal Home With A Three-Dimensional Replica
          </div>
          <div className={styles.ProcessBody}>
            We provide free estimates for every client. Our team will perform a
            high in-depth inspection of your home and outline proper solutions
            that fits your needs.
          </div>
          <Button classes={{ root: classes.root, label: classes.label }}>
            View Procedures
          </Button>
        </div>
        <div className={styles.ProcessImage} />
      </div>
      <div className={styles.Contact}>
        <div className={styles.ContactHeading}>
          <span>Roof Problems?</span>
          <span>Reid’s Roofing got you covered</span>
        </div>
        <div className={styles.ContactInfo}>
          <div>
            Talk to an expert right away regarding your roofing project or to
            get a quote
          </div>
          <div className={styles.ContactPersons}>
            <span>
              <b>Jeff Reid</b><br /> (298) 980–7663
            </span>
            <span>
              <b>Tim Reid</b><br /> (298) 355–9000
            </span>
          </div>
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  );
}
