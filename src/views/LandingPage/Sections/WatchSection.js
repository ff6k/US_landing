import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ReactPlayer from "react-player";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import { UserContext } from "context";

const useStyles = makeStyles(styles);

export default function WatchSection() {
  const classes = useStyles();

  const { data } = useContext(UserContext);

  const [style, setStyle] = React.useState({
    backgroundImage: "url(" + require("assets/img/video.png").default + ")",
  });
  const [flag, setFlag] = React.useState(true);

  React.useEffect(() => {
    if (!flag) {
      setStyle({
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
      });
    } else {
      setStyle({
        backgroundImage: "url(" + require("assets/img/video.png").default + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: window.innerWidth > 768? 700: 300,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        "@media(max-width: 768px)": {
          height: 300,
        },
      });
    }
  }, [flag]);

  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} style={{ padding: 0 }}>
          <div style={style}>
            {!flag && (
              <Fade in={true}>
                <>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    style={{
                      position: "absolute",
                      top: 5,
                      right: 5,
                      zIndex: 10,
                    }}
                    onClick={() => setFlag((flag) => !flag)}
                  >
                    <CloseIcon />
                  </IconButton>
                  <ReactPlayer
                    playing={true}
                    loop={true}
                    className="react-player"
                    url={data.defaultAPI + data.glb_state.demo_video.url}
                    width="100%"
                    height="100%"
                  />
                </>
              </Fade>
            )}
            {flag && (
              <Fade in={true}>
                <Button
                  color="transparent"
                  size="lg"
                  onClick={() => setFlag((flag) => !flag)}
                  className={classes.watchbtn}
                >
                  <i style={{ color: "#fff" }} className="fas fa-play" />
                  <span style={{ color: "#fff", fontSize: 15 }}>
                    Watch the demo
                  </span>
                </Button>
              </Fade>
            )}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
