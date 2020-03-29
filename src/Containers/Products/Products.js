import React, {useState, useEffect} from "react";
import styles from "./Products.module.scss";
import { heading } from "../../Components/UI/CommonElements";
import getImages from "../../utils/getImages";

import debounce from "debounce";

const Products = () => {
  const images = getImages();
  const [isMobile, setIsMobile] = useState(false);

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
    const isMb = window.innerWidth < 1115;
    setIsMobile(isMb);
  };

  const companyImages = images[1].map(
    (image, i) =>
      i < images[1].length - 4 && (
        <div key={i} className={styles.CompanyImageContainer}>
          <img src={image} alt="3rd party company images" />
        </div>
      )
  );
  const companyImages2 = images[1].map(
    (image, i) =>
      i > images[1].length - 4 && (
        <div key={i} className={styles.CompanyImageContainer}>
          <img src={image} alt="3rd party company images" />
        </div>
      )
  );
  const companyImagesAll = images[1].map(
    (image, i) =>
        <div key={i} className={styles.CompanyImageContainer}>
          <img src={image} alt="3rd party company images" />
        </div>
  );

  const productList = [
    {
      title: "Shingles",
      values: [
        "Certainteed Landmark",
        "BP Mystique",
        "IKO",
        "Owens Corning",
        "Marley",
        "GAF"
      ]
    },
    {
      title: "Vents",
      values: ["Weather Pro 50"]
    },
    {
      title: "Ice & Water",
      values: ["Bakers", "Grace", "Blue Skin"]
    },
    {
      title: "Synthetic Underlayment",
      values: ["Bakers", "Grace", "Blue Skin"]
    },
    {
      title: "Attic Installation",
      values: ["Pink Panther", "Owens Corning", "Certainteed"]
    },
    {
      title: "Skylights",
      values: ["Velux", "Columbia"]
    }
  ];

  const manufacturerList = productList.map((d, i) => {
    return (
      <div key={i} className={styles.ManufacturerDetail}>
        {heading(d.title)}

        {d.values.map(val => (
          <div className={styles.DetailItem} key={val}>
            {val}
          </div>
        ))}
      </div>
    );
  });

  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.ProductBanner}>
        <div className={styles.Headline}>
          Licensed and Insured To Use The Best Products On The Market. Nothing
          Beats Quality Materials Combined With Experience
        </div>
      </div>
      <div className={styles.Experience}>
        <div className={styles.ExperienceContent}>
          {heading("Experienced & Reliable")}
          <div className={styles.ExperienceTitle}>
            Quality Materials Plus Experienced Roofers Equals Superior
            Workmanship
          </div>
          <div className={styles.ExperienceBody}>
            We pride ourselves on quality workmanship that exceeds the rest,
            thats why we choose to use the best products for your home. Every
            product comes with their manufacturing warranty to ensure quality
            meets your expectations.
          </div>
        </div>
        <div className={styles.ExperienceLogos}>
          {isMobile ? <div>{companyImagesAll}</div> : 
          <>
          <div>{companyImages}</div>
          <div>{companyImages2}</div>
          </>
        }
        </div>
      </div>
      <div className={styles.Experience}>
        <div className={styles.ExperienceImage} />
        <div className={styles.ExperienceContent}>
          {heading("Warranty")}
          <div className={styles.ExperienceTitle}>
            15 Year Workmanship Warranty On All Labour Installations
          </div>
          <div className={styles.ExperienceBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consectetur, massa non gravida consequat, nisl nisl pellentesque
            quam, a varius nisi dui et nibh. Nam elementum quis felis mattis
            laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum.
            Curabitur id leo ac lorem iaculis congue id eget ligula.
          </div>
        </div>
      </div>
      <div className={styles.Manufacturers}>
        <div className={styles.ManufacturersTitle}>
          Products & Manufacturers
        </div>

        <div className={styles.ManufacturerList}>{manufacturerList}</div>
      </div>
    </div>
  );
};

export default Products;
