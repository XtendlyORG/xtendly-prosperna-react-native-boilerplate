import React from "react";
import clsx from "clsx";
import styles from "./HomepageDependencies.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const DependencyList = [
  {
    title: "React Native",
    Svg: require("../../static/img/dependencies/react.svg").default,
  },
  {
    title: "Typescript",
    Svg: require("../../static/img/dependencies/typescript.svg").default,
  },
  {
    title: "Redux",
    Svg: require("../../static/img/dependencies/redux.svg").default,
  },
  {
    title: "React-Navigation",
    Svg: require("../../static/img/dependencies/react-navigation.svg").default,
  },
  {
    title: "Formik",
    path: "/img/dependencies/formik.png",
  },
  {
    title: "Flipper",
    path: "/img/dependencies/flipper.png",
  },
  {
    title: "Reactotron",
    path: "/img/dependencies/reactotron.png",
  },
  {
    title: "Fastlane",
    Svg: require("../../static/img/dependencies/fastlane.svg").default,
  },
  {
    title: "Github Actions",
    Svg: require("../../static/img/dependencies/github.svg").default,
  },
  {
    title: "Prettier",
    Svg: require("../../static/img/dependencies/prettier.svg").default,
  },
  {
    title: "Eslint",
    Svg: require("../../static/img/dependencies/eslint.svg").default,
  },
  {
    title: "Jest",
    Svg: require("../../static/img/dependencies/jest.svg").default,
  },
];

function Dependency({ Svg, path, title }) {
  return (
    <div className={clsx("col col--2")}>
      <div className="text--center">
        {path && (
          <img
            className={styles.dependencySvg}
            src={useBaseUrl(path)}
            alt={title}
          />
        )}
        {Svg && <Svg className={styles.dependencySvg} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <p className="text--bold text--secondary">{title}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <h1
        style={{ color: "#404040", marginTop: "40px" }}
        className="text--center text--primary"
      >
        Technologies and Libraries 🏗️
      </h1>
      <section className={styles.dependencies}>
        <div className="container">
          <div className="row">
            {DependencyList.map((props, idx) => (
              <Dependency key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
