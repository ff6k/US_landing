import React, {useContext} from "react";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import { UserContext } from "context";

import CardButton from "components/CardButton/CardButton.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/packStyle.js";

const useStyles = makeStyles(styles);

export default function Step3() {
  const classes = useStyles();

  const context = useContext(UserContext);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GridContainer  style={{ justifyContent: "center" }}>
        <GridItem xs={12}>
          <p
            className={classes.text}
          >
            What sales channels do you currently use or want?
          </p>
        </GridItem>
      </GridContainer>
      <br />
      <br />
      <GridContainer style={{ justifyContent: "center" }}>
        <GridItem xs={12} sm={3}>
          <CardButton icon={"mobile"} onPress={() => context.setData({...context.data, selectedPackage: 4})} />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CardButton icon={"webstore"} onPress={() => context.setData({...context.data, selectedPackage: 4})} />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CardButton icon={"partner"} onPress={() => context.setData({...context.data, selectedPackage: 4})} />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CardButton icon={"social"} onPress={() => context.setData({...context.data, selectedPackage: 4})} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
