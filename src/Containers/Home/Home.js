import React, {useState, useEffect} from "react";
import styles from "./Home.module.scss";
import getImages from "../../utils/getImages";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { heading } from "../../Components/UI/CommonElements";

import Slider from "react-slick";

import debounce from "debounce";

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
  const [isMobile, setIsMobile] = useState(false);
  const images = getImages();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    speed: 500,
  };


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
  
  const servicesOffered = [
    { title: "ReRoof", desc: "" },
    { title: "Roof Inspection", desc: "" },
    { title: "Sun Tunnel Installation", desc: "" },
    { title: "New Construction", desc: "" },
    { title: "Roof Repairs", desc: "" },
    { title: "Skylight Installation", desc: "" }
  ];

  const imagesModal = images[1].map((image, i) => (
    <img key={i} src={image} alt="products"/>
  ));


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
          <Button>
            <a href="/about">Learn More</a>
          </Button>
        </div>
        <div className={styles.CompanyImage} />
      </div>
      <div className={styles.Services}>
        <div className={styles.ServicesContent}>
          {heading("Our Services & Expertise")}
          <div className={styles.ServicesBody}>
            Experienced Roofers At Your Service
          </div>
          <Button>
            <a href="/services">View All Sevices</a>
          </Button>
        </div>
        <div className={styles.ServicesOffered}>
          {servicesOffered.map((service, i) => (
            <div key={i}>{service.title}</div>
          ))}
        </div>
      </div>
      <div className={styles.Products}>
        <div className={styles.ProductList}>
          {isMobile ? (
            <Slider {...settings}>{imagesModal}</Slider>
          ) : (
            <>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          </>
          )
          
        }
        </div>
        <div className={styles.ProductContent}>
          {heading("Our Services & Expertise")}
          <div className={styles.ProductHeading}>
            Experience Quality Materials, These Are The Brands We Trust
          </div>
          <div className={styles.ProductBody}>
            We pride ourselves on quality workmanship that exceeds the rest,
            thats why we choose to use the best products for your home. Every
            product comes with their manufacturing warranty to ensure quality
            meets your expectations.
          </div>
          <Button>
            <a href="/products">View Our Brands</a>
          </Button>
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
            <a href="/about">View Procedures</a>
          </Button>
        </div>
        <div className={styles.ProcessImage} />
      </div>
      <div className={styles.Contact}>
        <div className={styles.ContactHeading}>
          <span>Roof Problems?</span>
          <span>We got you covered</span>
        </div>
        <div className={styles.ContactInfo}>
          <div>
            Talk to an expert right away regarding your roofing project or to
            get a quote
          </div>
          <div className={styles.ContactPersons}>
            <span>
              <b>Jeff Reid</b>
              <br /> (298) 980–7663
            </span>
            <span>
              <b>Tim Reid</b>
              <br /> (298) 355–9000
            </span>
          </div>
          <Button>
            <a href="/contact">Contact us</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
