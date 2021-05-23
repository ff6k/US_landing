import React, {useContext} from "react";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import { UserContext } from "context";

import styles from "assets/jss/material-kit-react/views/landingPageSections/packStyle.js";

const useStyles = makeStyles(styles);

export default function Step1() {
  const classes = useStyles();

  const context = useContext(UserContext);

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
          {`Let us help you find the right package`}
        </p>
      </GridItem>
      <GridItem
        xs={12}
        style={{
          padding: 0,
          alignItems: "center",
          display: "flex",
        }}
      >
        <Button
          variant="outlined"
          style={{ color: "#fff", borderColor: "#fff", margin: "20px auto" }}
          onClick={() => context.setData({...context.data, selectedPackage: 2})}
        >
          {`Start`}
        </Button>
      </GridItem>
    </GridContainer>
  );
}
