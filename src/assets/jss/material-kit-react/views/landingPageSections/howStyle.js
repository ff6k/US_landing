import { title } from "assets/jss/material-kit-react.js";

const howStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  container: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 720,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#000",
    "&:before": {
      background: "rgba(0, 0, 0, 0.9)",
    },
  },
  watchbtn: {
    borderColor: "#fff",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "5px",
  },
  topimg: {
    width: 600,
    height: 400,
    marginBottom: -200,
    zIndex: 1,
    "@media(max-width: 768px)": {
      width: 325,
      height: 200,
      marginBottom: -100,
    },
  },
  text: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 160,
    "@media(max-width: 768px)": {
      fontSize: 55,
    },
    fontFamily: '"Work Sans", sans-serif'
  },
  bottomCon: {
    display: "flex",
    width: "100%",
    marginRight: 30,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    "@media(max-width: 768px)": {
      justifyContent: "center",
    },
  },
  bottomIco: {
    width: 183,
    height: "fit-content",
    marginTop: -100,
    zIndex: 1,
    cursor: "pointer",
  },
};

export default howStyle;