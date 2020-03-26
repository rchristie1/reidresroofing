import React from "react";
import styles from "./OurServices.module.scss";
import { Button } from "@material-ui/core";
import { heading } from "../../Components/UI/CommonElements";

function OurServices() {
  const services = {
    hardware: [
      {
        key: 1,
        value: "ReRoof",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 2,
        value: "Sun Tunnel Installation",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 3,
        value: "New Construction",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 4,
        value: "Vent Installation",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 5,
        value: "Animal Prevention",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 6,
        value: "Attic Installation",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 7,
        value: "Flashing Repaint/ Reseal",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 8,
        value: "Chimney Removal",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 9,
        value: "Exhaust Hoses / Vents",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 10,
        value: "Skylight Installation",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      }
    ],
    repair: [
      {
        key: 11,
        value: "Roof Repair",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 12,
        value: "Soffit Repair",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 13,
        value: "Eves Repair",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 14,
        value: "Leak Repairs",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      },
      {
        key: 15,
        value: "Roof Inspection",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, massa non gravida consequat, nisl nisl pellentesque quam, a varius nisi dui et nibh. Nam elementum quis felis mattis laoreet. Praesent sollicitudin malesuada mauris iaculis fermentum. Curabitur id leo ac lorem iaculis congue id eget ligula.",
        link: ""
      }
    ]
  };

  return (
    <div className={styles.ServicesContainer}>
      <div className={styles.ServiceBanner}>
        <div className={styles.Headline}>
          Roofing is our speciality, and we can do it all. Let us help you with
          your next project
        </div>
      </div>
      <div className={styles.ServiceContent}>
        <div className={styles.ServiceContainer}>
          <div className={styles.ServiceHeader}>
            {heading("Services")}
            <h1>Hardware Installation</h1>
          </div>
          <div className={styles.ServiceContainerItem}>
            {services.hardware.map(service => (
              <div key={service.key}>
                <div className={styles.Image} />
                <div className={styles.Title}>{service.value}</div>
                <div className={styles.Content}>
                {service.content}
                </div>
                <div className={styles.Link}>
                  <Button>Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.ServiceContainer}>
          <div className={styles.ServiceHeader}>
            {heading("Services")}
            <h1>Repairs & Maintenance</h1>
          </div>
          <div className={styles.ServiceContainerItem}>
            {services.hardware.map((service, i) => (
              <div key={service.key}>
                <div className={styles.Image} />
                <div className={styles.Title}>{service.value}</div>
                <div className={styles.Content}>
                  {service.content}
                </div>
                <div className={styles.Link}>
                  <Button>Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
