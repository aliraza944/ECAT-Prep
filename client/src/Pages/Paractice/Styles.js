import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paracticeContent: {
    width: "100%",
    // height: "95v h",
  },
  qeustionTitle: {
    fontSize: "1.5em",
    fontWeight: "700",
    color: "#3e3e3e",
    letterSpacing: "0.05em",
  },
  paperContent: {
    padding: "10em 0 0 0",
    width: "60%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 0 100px 0",
  },
  qustionsAmount: {
    fontSize: "1.2em",
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
    backgroundColor: "#40a3ff",
    "& *": {
      color: "white",
      width: "100px",
    },
  },
  modal: {
    top: "50%",
    left: "50%",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },
  modalPaper: {
    width: "50%",
    margin: "100px 0 100px 0",
    textAlign: "center",
  },
  modalBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default useStyles;
