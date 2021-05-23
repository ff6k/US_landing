import React, { useEffect, useState, useContext } from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";

// Sections for this page
import WatchSection from "./Sections/WatchSection.js";
import WhySection from "./Sections/WhySection.js";
import WhatSection from "./Sections/WhatSection.js";
import HowSection from "./Sections/HowSection.js";
import PacksliderSection from "./Sections/PacksliderSection.js";
import PackageSection from "./Sections/PackageSection.js";
import ContactSection from "./Sections/ContactSection.js";

import { UserContext } from "context";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const { data } = useContext(UserContext);
  const [direction, setDirection] = useState("row");

  const text_data = [
    "A single platform for all your commerce needs, managed from one place.",
    "All-in-one omnichannel ecommerce system powered with Realtime Data.",
  ];

  useEffect(() => {
    detectDirection();
    window.addEventListener("resize", detectDirection());
  }, []);

  const detectDirection = () => {
    if (window.innerWidth < 768) setDirection("column-reverse");
    else setDirection("row");
  };

  return (
    <div style={{ maxWidth: "100vw" }}>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={require("assets/img/icon/logo.svg").default} width="70%" height="70%"/>}
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
            infiniteLoop={true}
          >
            {text_data.map((text, i) => (
              <GridContainer
                direction={direction}
                style={{ justifyContent: "center" }}
                key={i}
              >
                <GridItem xs={12} sm={7}>
                  <img
                    src={
                      data.defaultAPI + data.glb_state.Banner[0].Image[0].url
                    }
                    width="100%"
                    height="100%"
                  />
                </GridItem>
                <GridItem
                  xs={12}
                  sm={5}
                  style={{ padding: 0, alignItems: "center", display: "flex" }}
                >
                  <h4 className={classes.parallexRightTxt}>{text}</h4>
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
        <PacksliderSection />
        <PackageSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
