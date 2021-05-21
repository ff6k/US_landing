
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from '@material-ui/core/Grid';

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';

const string = [
  "Live KanBan Order management;",
  "Integrated with your Storefront, Mobile App and Sellers App",
  "Integrate with Marketplaces",
  "Live Kanban Delivery status management",
  "Integrated with your owned delivery partner and DHL",
  "Fulfilment management; Collection and Delivery"
]

const useStyles = makeStyles(styles);

export default function SectionTabs() {

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
                tabs={[
                  {
                    tabName: "Order Management",
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                  {
                    tabName: "Production",
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it.
                      </p>
                    ),
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>Facts</h3>
              {string.map((s, i) => {
                    return(
                      <Grid container spacing={3} key={i}>
                      <Grid item xs={1}>
                        <CheckCircleIcon style={{color: "#FFC700"}}/>
                      </Grid>
                      <Grid item xs={11}>
                        <Typography>{s}</Typography>
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
