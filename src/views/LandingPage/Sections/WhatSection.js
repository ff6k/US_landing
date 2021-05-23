
import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from '@material-ui/core/Grid';

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { UserContext } from "context";

const useStyles = makeStyles(styles);

export default function SectionTabs() {

  const { data } = useContext(UserContext);

  const [tabArr, setTabArr] = useState([]);

  useEffect(() => {
    const tmp = [];
    data.selectedData.secondary_section.map((obj) => {
      tmp.push({
        tabName: obj.title,
        tabContent: (
          <p className={classes.textCenter}>{obj.description}</p>
        ),
      });
    });
    setTabArr(tmp);
  }, [data]);

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                plainTabs
                headerColor="primary"
                tabs={tabArr}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>Facts</h3>
              {data.selectedData.facts.map((s, i) => {
                    return(
                      <Grid container spacing={3} key={i}>
                      <Grid item xs={1}>
                        <CheckCircleIcon style={{color: "#FFC700"}}/>
                      </Grid>
                      <Grid item xs={11}>
                        <p>{s.fact}</p>
                      </Grid>
                    </Grid>
                    )
                  })}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
