import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

import { UserContext } from "context";

const useStyles = makeStyles(styles);

export default function WhySection() {
  const { data } = useContext(UserContext);

  const [tabArr, setTabArr] = useState([]);

  useEffect(() => {
    const tmp = [];
    data.glb_state.how_section.map((obj) => {
      tmp.push({
        tabName: obj.primary_title,
        tabContent: (
          <p className={classes.textCenter}>{obj.primary_description}</p>
        ),
      });
    });
    setTabArr(tmp);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3 className={classes.title}>{data.glb_state.how_title}</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <br />
              <br />
              <CustomTabs plainTabs headerColor="primary" tabs={tabArr} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <br />
              <br />
              <img
                src={require("assets/img/ipad.png").default}
                style={{ backgroundSize: "contain", width: "100%" }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
