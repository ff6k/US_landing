const parallaxStyle = {
  banner: {
    overflow: "scroll",
    marginTop: "30px",
    backgroundColor: "#E5E5E5",
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "80%",
    backgroundRepeat: "no-repeat",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 768px)": {
      backgroundPosition: "top",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    height: "80vh",
    maxHeight: "300px",
    width: "90%",
    margin: "auto",
    justifyContent: "center",
    "@media (min-width: 768px)": {
      maxHeight: "1000px",
    },
  },
  text: {
    alignItems: "center",
    display: "flex",
    fontSize: "1.0rem",
    fontWeight: "400",
    lineHeight: "1em",
    maxWidth: "400px",
    marginTop: "10%",
    color: "#000",
    "@media (min-width: 768px)": {
      marginTop: "0",
      alignItems: "flex-end",
      fontSize: "2.0rem",
      lineHeight: "1.1em",
      paddingBottom: "40px",
    },
  },
  bannerImg: {
    "@media (max-width: 768px)": {
      maxWidth: "50%",
      height: "fit-content",
      alignSelf: "flex-end",
    },
  },
};

export default parallaxStyle;
