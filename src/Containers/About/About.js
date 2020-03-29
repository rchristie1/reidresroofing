import React from "react";
import styles from "./About.module.scss";
import { heading } from "../../Components/UI/CommonElements";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const About = () => {
  const cards = [
    {
      heading: "Step One",
      title: "Inspection And Evaluation",
      content:
        "We start by taking your current information, we then set a time and date to have either Tim or Jeff come out and inspect your roof and let you know if it’s in fact time to repair, change, or possibly give you the life expectancy of your current shingles maybe it would be time to do a roof tune up. Which would possibly extend the life of your current roof. If its in fact time to change we would then measure your roof to find exact material counts, we will also take the time to inspect your home making sure if any adjustment to ventilation,flashing,plywood etc needs to take place during the roofing project. After the roof has been inspected Tim or Jeff will then walk around to make sure any breakables, lawn furniture or interlocking should have extra care when the crew comes to complete the roof."
    },
    {
      heading: "Step Two",
      title: "Present Assessment",
      content:
        "Tim or Jeff will then sit down with the customer and discuss what they have come across during inspection and measurement. After discussing what they think does or does not need to be done, they will then go over materials, colours, timing, discounts and finally the quote itself."
    },
    {
      heading: "Step Three",
      title: "Setting The Timeline",
      content:
        "Once the customer has made the choice to go with Reid’s Residential Roofing, they will set a time and date for the roofing project to be completed."
    },
    {
      heading: "Step Four",
      title: "Bring In The Equipment",
      content:
        "When the date is reached the crew along with owner Jeff will be there with all their equipment, which includes a rolling trailer bin for disposal. We use this to ensure the bin doesn’t damage the property and will be removed the minute the job is complete."
    },
    {
      heading: "Step Five",
      title: "Check Surroundings",
      content:
        "The crew then looks over the project sheet and covers and moves any items under the roof line that has the potential to be damaged or marked."
    },
    {
      heading: "Step Six",
      title: "Safety Is Always First",
      content:
        "The crew gets all safety gear on and starts project, safety is very important at Reid’s Residential Roofing, we care for each individual worker as if they were family. From start to finish the crew works constantly, carefully and takes their time to ensure a perfect install of your roof."
    },
    {
      heading: "Step Seven",
      title: "Clean Up And Hand Off",
      content:
        "After the roof is complete all eaves and ground work will be cleared up as if it had never been there. The crew will magnet sweep and use a leaf blower to ensure a perfect ground clean up."
    }
  ];

  return (
    <div className={styles.AboutContainer}>
      <div className={styles.Banner}>
        <div className={styles.Content}>
          <div className={styles.Headline}>
          Reid’s Residential Roofing is a team of highly trained professionals for all your roofing needs.
          </div>
          <div className={styles.SubHeadline}>
            A family owned and operated business. We are a team you can trust.
          </div>
        </div>
      </div>

      <div className={styles.AboutMain}>
        <div className={styles.AboutContent}>
          <div className={styles.AboutContentLeft}>
            {heading("Who We Are")}
            <div className={styles.AboutHeading}>
              Reid’s Residential Roofing is a father, son owned and operated
              business that prides their self on quality workmanship that
              exceeds the rest
            </div>
            <div className={styles.AboutBody}>
              Tim and Jeff truly believe that your roof is the armour to what
              you call home. Here at Reid’s Residential Roofing we treat each
              persons home as if it were our own. We know how important the
              functionality along with the aesthetics of your roof is. Here at
              Reid’s residential roofing intend on all our customers being
              pleased from the moment they call email or text leading up to the
              quote and lastly the installation. Reid’s residential roofing
              prides it’s self on customer service, we truly believe that each
              and every customer deserves the same friendly treatment.
            </div>
          </div>
          <div className={styles.AboutContentRight}>
            <div className={styles.AboutImage}><div /></div>
          </div>
        </div>

        <div className={styles.AboutProcess}>
          <div className={styles.AboutProcessLeft} />
          <div className={styles.AboutProcessRight}>
            {heading("Our Process")}
            <div className={styles.AboutProcessHeading}>
              Reid’s Residential Roofing uses a wide selection of products, we
              will take the time and go through all products, colours and
              options available to make sure each and every customer gets
              exactly what they want with the quality they deserve.
            </div>
          </div>
        </div>

        <div className={styles.AboutCards}>
          <div className={[styles.AboutCard, styles.FirstCard].join(" ")} />
          {cards.map((card, i) => {
            return (
              <div key={i} className={styles.AboutCard}>
                {heading(card.heading)}
                <div className={styles.AboutCardBody}>
                  <div>{card.title}</div>
                  <div>{card.content}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.AboutContact}>
          <div>We Got You Covered.</div>
          <div>Let’s Work Together On Your Next Project</div>
          <div>Contact us for a free consultation and estimate regarding your roofing project.</div>
          <span><Link to='/contact'><Button>Contact us</Button></Link></span>
        </div>
      </div>
    </div>
  );
};

export default About;
