const customTabsStyle = {
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px",
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important",
  },
  displayNone: {
    display: "none !important",
  },
  tabsRoot: {
    minHeight: "unset !important",
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#000 !important",
    marginLeft: "4px",
    fontWeight: "600",
    fontSize: "14px",
    "&:last-child": {
      marginLeft: "0px",
    },
  },
  tabSelected: {
    borderRadius: "40px",
    backgroundColor: "#612EF2;",
    transition: "0.2s background-color 0.1s",
    color: "#fff !important",
    fontWeight: "600",
    fontSize: "14px",
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important",
    },
    "&,& *": {
      letterSpacing: "normal !important",
    },
  },
};

export default customTabsStyle;
