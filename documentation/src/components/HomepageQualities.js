import React from "react";
import clsx from "clsx";
import styles from "./HomepageQualities.module.css";

const QualityList = [
  {
    title: "Easy to Use 👌",
    description: (
      <>
        A simple starter kit with basic and well known dependencies. We provide
        an easy to understand example
      </>
    ),
  },
  {
    title: "Small to Big 📱",
    description: (
      <>
        A light Starterkit with solid bases to build small and large
        application. We decided to use only necessary dependencies but strong
        ones.
      </>
    ),
  },
  {
    title: "Powered by Xtendly & Prosperna Developers",
    description: <>We love working on React Native! Join the adventure 😉</>,
  },
];

function Quality({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h2 style={{ color: "#58acf4" }} className="text--secondary">
          {title}
        </h2>
        <p style={{ color: "#404040" }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageQualities() {
  return (
    <section className={styles.qualities}>
      <div className="container">
        <div className={styles.dependencies}>
          <img
            className={styles.dependencySvg}
            src={
              "https://prosperna.com/wp-content/uploads/2021/08/ProspernaLogo.svg"
            }
            style={{ marginLeft: "auto", marginRight: "40px" }}
          />
          <img
            className={styles.dependencySvg}
            src={
              "https://xtendly.com/wp-content/uploads/2022/04/xtendly-hor-orig.png"
            }
            style={{ marginRight: "auto" }}
          />
        </div>
        <div className="row">
          {QualityList.map((props, idx) => (
            <Quality key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
