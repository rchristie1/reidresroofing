import React, { useState } from "react";
import styles from "./Portfolio.module.scss";
import getImages from "../../utils/getImages";
import Slider from "react-slick";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const useStyles = makeStyles({
  root: {
    height: "34px",
    width: "34px",
    position: "absolute",
    right: "24px",
    top: "24px",
    color: "#ffff",
    cursor: "pointer"
  }
});

export const arrowStyles = makeStyles({
  root: {
    height: "60px",
    width: "60px",
    color: "#46525e",
    backgroundColor: "#fff"
  }
});

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0)
  const images = getImages();
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialSlide,
    nextArrow: <ChevronRightIcon classes={{root: arrowStyles.root}}/>,
    prevArrow: <ChevronLeftIcon classes={{root: arrowStyles.root}}/>,
  };

  const openModal = (i) => {
    setInitialSlide(i)
    setModalOpen(true)
  }

  const imagesss = images[0].map((image, i) => (
    <div
      key={i}
      className={styles.Image}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => openModal(i)}
    />
  ));
  const imagesModal = images[0].map((image, i) => (
    <img key={i} src={image} alt={image}/>
  ));

  return (
    <div className={styles.Container}>
      <div className={styles.Banner}>
        <div>
          <div className={styles.Headline}>We Are Proud Of Our Work</div>
          <div className={styles.SubHeadline}>
            Get inspired, Reid’s Residential Roofing is here to help.
          </div>
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.ContentContainer}>
          <h1>Our Portfolio</h1>

          <div className={styles.ImageContainer}>{imagesss}</div>
        </div>
        <Modal
          aria-labelledby="Portfolio Modal"
          aria-describedby="Portfolio Modal"
          open={modalOpen}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <div className={styles.ModalContainer}>
            <CloseIcon
              onClick={() => setModalOpen(false)}
              classes={{ root: classes.root }}
            />
            <Fade in={modalOpen}>
              <Slider {...settings}>{imagesModal}</Slider>
            </Fade>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
