import React, { useContext, useEffect } from "react";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import { UserContext } from "context";

import styles from "assets/jss/material-kit-react/views/landingPageSections/packStyle.js";

const useStyles = makeStyles(styles);

export default function Step4() {
  const classes = useStyles();

  const context = useContext(UserContext);
  useEffect(() => {
    if (context.data.selectedPackage) {
      setTimeout(() => {
        context.setData({ ...context.data, selectedPackage: 6 });
      }, 3000);
    }
  }, [context.data.selectedPackage]);

  return (
    <GridContainer delay style={{ justifyContent: "center" }}>
      <GridItem
        xs={12}
        style={{
          padding: 0,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p className={classes.text} style={{ textAlign: "center", color: "#fff" }}>
          Great News!
        </p>
      </GridItem>
    </GridContainer>
  );
}
