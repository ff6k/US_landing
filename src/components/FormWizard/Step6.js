import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  scroll: {
    overflowX: "hidden",
    display: "flex",
    flexDirection: "row ",
    justifyContent: "center",
    "@media(max-width: 768px)": {
      justifyContent: "flex-start",
      overflowX: "scroll",
    },
  },
}));

const tiers = [
  {
    title: "Gomarket",
    price: "199.-",
    description: [
      "Multistore Realtime Dashboard",
      "App Stores Mobile App",
      "Multistore App",
      "Production & Buying",
      "All Payment Channels",
      "Dedicated Server + Storefront",
    ],
    buttonText: "Request Now",
    buttonVariant: "outlined",
  },
  {
    title: "Gomultiarket",
    price: "199.– ",
    description: [
      "Multistore Realtime Dashboard",
      "App Stores Mobile App",
      "Multistore App Production & Buying",
      "All Payment Channels",
      "Dedicated Server + Storefront",
      "Multistore Realtime Dashboard",
      "App Stores Mobile App" ,
      "Multistore App",
    ],
    buttonText: "Request Now",
    buttonVariant: "outlined",
  },
  {
    title: "Gomarketplace",
    price: "399.-",
    description: [
      "Multistore Realtime Dashboard",
      "App Stores Mobile App",
      "Multistore App Production & Buying",
      "All Payment Channels",
      "Dedicated Server + Storefront",
      "Multistore Realtime Dashboard",
      "App Stores Mobile App" ,
      "Multistore App",
      "Dedicated Server + Storefront"
    ],
    buttonText: "Request Now",
    buttonVariant: "outlined",
  },
];



export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" component="main">
      <br/><br/><br/><br/>
      <Typography variant="h5" bold color="textSecondary">
        We understand from your selection that you are a product based
        multi-store business, buying in from suppliers, wanting to rule the
        world using a mobile app, selling with card machine, online card
        payments and crypto.
      </Typography>
      <br/><br/>
        <div className={classes.scroll}>
          {tiers.map((tier) => (
            <Card style={{ minWidth: 300, margin: 10 }} key={tier.title}>
              <CardHeader
                title={tier.title}
                titleTypographyProps={{
                  align: "center",
                  style: { fontWeight: 600 },
                }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent>
                <ul style={{ height: 450 }}>
                  {tier.description.map((line, i) => (
                    <Grid container spacing={1} key={i}>
                      <Grid item xs={2}>
                        <CheckCircleIcon style={{ color: "#C4C4C4" }} />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="left"
                          key={line}
                        >
                          {line}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </ul>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    {tier.price}
                  </Typography>
                  <Typography variant="h6" bold color="textSecondary">
                    pounds/month
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  style={{ color: "#612EF2", borderColor: "#612EF2" }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </Container>
    </React.Fragment>
  );
}
