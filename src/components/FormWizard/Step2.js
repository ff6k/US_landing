import React, {useContext} from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "context";

import CardButton from "components/CardButton/CardButton.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/packStyle.js";

const useStyles = makeStyles(styles);

export default function Step2() {
  const classes = useStyles();

  const context = useContext(UserContext);

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <GridContainer style={{ justifyContent: "center" }}>
          <GridItem xs={12}>
            <p
              className={classes.text}
            >
              What type of business do you own or want to own?
            </p>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <GridItem xs={12} sm={4}>
            <CardButton icon={"vector"} onPress={() => context.setData({...context.data, selectedPackage: 3})} />
          </GridItem>
          <GridItem xs={12} sm={4}>
            <CardButton icon={"social"} onPress={() => context.setData({...context.data, selectedPackage: 3})} />
          </GridItem>
          <GridItem xs={12} sm={4}>
            <CardButton icon={"webstore"} onPress={() => context.setData({...context.data, selectedPackage: 3})} />
          </GridItem>
        </GridContainer>
      </div>
    );
}
