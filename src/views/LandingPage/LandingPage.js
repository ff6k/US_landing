import React, { useEffect, useState, useContext } from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import WatchSection from "./Sections/WatchSection.js";
import WhySection from "./Sections/WhySection.js";
import WhatSection from "./Sections/WhatSection.js";
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";
import HowSection from "./Sections/HowSection.js";

import { UserContext } from "context";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const { data } = useContext(UserContext);
  const [direction, setDirection] = useState("row");

  useEffect(() => {
    console.log(window.innerWidth)
    detectDirection();
    window.addEventListener("resize", detectDirection());
  }, []);

  const detectDirection = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) setDirection("column-reverse");
    else setDirection("row");
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/background.png").default}>
        <div className={classes.container}>
          <Carousel
            autoPlay={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            showArrows={false}
          >
          {data.glb_state.Banner.map((obj, i) => (
              <GridContainer
                direction={direction}
                style={{ justifyContent: "center" }}
                key={i}
              >
                <GridItem xs={12} sm={7}>
                  <img
                    // src={data.defaultAPI + obj.Image[0].url}
                    src={require("assets/img/bg.png").default}
                    width="100%"
                    height="100%"
                  />
                </GridItem>
                <GridItem
                  xs={12}
                  sm={5}
                  style={{ padding: 0, alignItems: "center", display: "flex" }}
                >
                  <h4 className={classes.parallexRightTxt}>
                    {obj.banner_text}
                  </h4>
                </GridItem>
              </GridContainer>
          ))}
            </Carousel>
        </div>
      </Parallax>
      <div>
        <WatchSection />
        <WhySection />
        <WhatSection />
        <HowSection />
      </div>
    </div>
  );
}
