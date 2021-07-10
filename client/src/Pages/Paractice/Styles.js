import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "white",
    },
  },
  paracticeContent: {
    width: "100%",
  },
  qeustionTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    letterSpacing: "0.05em",
  },
  noQuestions: {
    width: "100%",
    height: "100vh ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#6f6f6f",
    textTransform: "uppercase",
  },
  paperContent: {
    padding: "1em 0 0 0",
    width: "80%",
    fontSize: "2rem",

    [theme.breakpoints.up("sm")]: {
      fontSize: "2.4rem",
      padding: "3em 0 0 0",
      width: "60%",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 0 100px 0",
  },
  qustionsAmount: {
    fontSize: "1rem",
    color: "#6f6f6f",
    textTransform: "uppercase",
    marginBottom: "60px",
  },
  questionBtn: {
    padding: "0px 0 0 0 ",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "50px",
    backgroundColor: "#40a3ff",
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    "& *": {
      color: "white",
      width: "100px",
    },
  },
  modal: {
    top: "80%",
    left: "80%",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      top: "50%",
      left: "50%",
    },
  },
  modalPaper: {
    width: "80%",
    margin: "80px 0 80px 0",
    textAlign: "center",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px 20px 20px 20px",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      margin: "200px 0 200px 0",
    },
  },
  modalText: {
    textAlign: "center",
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
  },
  modalBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));
export default useStyles;
