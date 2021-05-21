const parallaxStyle = {
  parallax: {
    maxHeight: "1000px",
    minHeight: "500px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: "#E5E5E5",
    backgroundSize: "80%",
    backgroundRepeat: "no-repeat",
  },
  filter: {
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
  },
};

export default parallaxStyle;
