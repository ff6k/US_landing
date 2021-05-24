import React from "react";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: 300,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ContactSection() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={11}>
          <br/><br/>
          <h4
            style={{ fontSize: "1.7rem", fontWeight: 600, textAlign: "center",margin: 'auto', maxWidth: 800 }}
          >
            {`If you want to discuss this furhter please book in a Zoom call with our specialist team.`}
          </h4>
        </GridItem>
        <GridItem xs={10}>
          <h4
            style={{ fontSize: "1.0rem", textAlign: "center", padding: 20 }}
          >
            {`Opening hours 10am to 10pm UK time`}
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
