import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "@material-ui/core/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/packStyle.js";

import Step1 from "components/FormWizard/Step1.js";
import Step2 from "components/FormWizard/Step2.js";
import Step3 from "components/FormWizard/Step3.js";
import Step4 from "components/FormWizard/Step4.js";
import Step5 from "components/FormWizard/Step5.js";
import Step6 from "components/FormWizard/Step6.js";

import { UserContext } from "context";

const useStyles = makeStyles(styles);

export default function PacksliderSection() {
  const classes = useStyles();
  const { data } = useContext(UserContext);
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} style={{ padding: 0 }}>
          {data.selectedPackage == 1 && (
            <Fade in={data.selectedPackage == 1}>
              <div className={classes.container}>
                <Step1 />
              </div>
            </Fade>
          )}
          {data.selectedPackage == 2 && (
            <Fade in={data.selectedPackage == 2}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className={classes.container}
                  style={{ backgroundColor: "#F1F1EF" }}
                >
                  <Step2 />
                </div>
                <h4
                  className={classes.text}
                  style={{
                    margin: "-130px auto 150px auto",
                    textAlign: "center",
                    maxWidth: "800px",
                    fontSize: "16px",
                    padding: "10px",
                    color: "#000",
                  }}
                >
                  {`Select the options that are where you want your business to
                    be, at the end we will determine the right package for your
                    business.`}
                </h4>
              </div>
            </Fade>
          )}
          {data.selectedPackage == 3 && (
            <Fade in={data.selectedPackage == 3}>
              <div
                className={classes.container}
                style={{ backgroundColor: "#F1F1EF" }}
              >
                <Step3 />
              </div>
            </Fade>
          )}
          {data.selectedPackage == 4 && (
            <Fade in={data.selectedPackage == 4}>
              <div
                className={classes.container}
                style={{ backgroundColor: "#F1F1EF" }}
              >
                <Step4 />
              </div>
            </Fade>
          )}
          {data.selectedPackage == 5 && (
            <Fade in={data.selectedPackage == 5}>
              <div
                className={classes.container}
                style={{ backgroundColor: "#00A674" }}
              >
                <Step5 />
              </div>
            </Fade>
          )}
          {data.selectedPackage == 6 && (
            <Fade in={data.selectedPackage == 6}>
              <div
                className={classes.container}
                style={{ backgroundColor: "#fff", height: 1200 }}
              >
                <Step6 />
              </div>
            </Fade>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
