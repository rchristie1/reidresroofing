import React, { useState } from "react";
import styles from "./Contact.module.scss";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "60px"
  },
  label: {
    fontSize: "18px",
    lineHeight: "1.56",
    fontWeight: "bold"
  }
});

const iconStyles = makeStyles({
  root: {
    color: "#fff",
    fontSize: "36px"
  }
});

function Contact() {
  const classes = useStyles();
  const iconClasses = iconStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    service: ""
  });

  const services = [
    {
      value: "Type of Service",
      disabled: true
    },
    {
      value: "ReRoof",
      disabled: false
    },
    {
      value: "Roof Inspection",
      disabled: false
    },
    {
      value: "Sun Tunnel Installation",
      disabled: false
    },
    {
      value: "New Construction",
      disabled: false
    },
    {
      value: "Roof Repairs",
      disabled: false
    },
    {
      value: "Skylight Installation",
      disabled: false
    }
  ];

  const handleChange = (event, textfield) =>
    setFormData({ ...formData, [textfield]: event.target.value });

  const handleSubmit = () => {
    console.log("submitting: " + formData);
  };

  return (
    <div className={styles.ContactContainer}>
      <div className={styles.Banner}>
        <div className={styles.Content}>
          <div className={styles.Headline}>
            <span>Got a new project in mind?</span>
            <span>Let us know below.</span>
          </div>

          <div className={styles.ContactMain}>
            <div>
              <form className={styles.FormContainer}>
                <div className={styles.Name}>
                  <TextField
                    placeholder="Name"
                    variant="outlined"
                    onChange={e => handleChange(e, "name")}
                  />
                </div>
                <div className={styles.EmailPhone}>
                  <TextField
                    classes={{ root: styles.Email }}
                    placeholder="Email"
                    variant="outlined"
                    onChange={e => handleChange(e, "email")}
                  />
                  <TextField
                    placeholder="Phone"
                    variant="outlined"
                    onChange={e => handleChange(e, "phone")}
                  />
                </div>
                <div className={styles.Service}>
                  <TextField
                    select
                    value={formData.service}
                    onChange={e => handleChange(e, "service")}
                    SelectProps={{
                      native: true
                    }}
                    variant="outlined"
                  >
                    {services.map((option, i) => (
                      <option
                        key={i}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.value}
                      </option>
                    ))}
                  </TextField>
                </div>
                <div className={styles.Message}>
                  <TextField
                    rows="8"
                    multiline={true}
                    placeholder="Message"
                    variant="outlined"
                    onChange={e => handleChange(e, "message")}
                  />
                </div>

                <Button
                  onClick={() => handleSubmit()}
                  classes={{ root: classes.root, label: classes.label }}
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className={styles.InfoContainer}>
              <div className={styles.Headline}>
                Contact us for a free consultation and estimate regarding your
                roofing project.
              </div>

              <div className={styles.Location}>
                <span>Reid’s Residential Roofing</span> <br />
                <span>123 Reids Roofing Ave Toronto, Ontario</span>
              </div>
              <div className={styles.Info}>
                reidsresidentialroofing@hotmail.com <br />
                <div>
                  <span className={styles.ContactName}>Jeff Reid</span>
                  <br /> (298) 980–7663
                </div>
                <div>
                  <span className={styles.ContactName}>Tim Reid</span>
                  <br /> (298) 355–9000
                </div>
              </div>
              <div className={styles.Social}>
                <a
                  href="https://www.facebook.com/reidsresidentialroofing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon classes={{ root: iconClasses.root }} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon classes={{ root: iconClasses.root }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
