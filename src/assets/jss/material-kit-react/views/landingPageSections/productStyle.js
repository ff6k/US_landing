import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
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
  vcontainer: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 700,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.9)",
    },
    "@media(max-width: 768px)": {
      height: 300,
    },          
  },
  watchbtn: {
    borderColor: '#fff',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: "5px"
  }
};

export default productStyle;
