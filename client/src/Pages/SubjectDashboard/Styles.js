import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#ededed",
    },
  },
  subjectDashBoardContent: {
    overflow: "hidden",
    padding: "0 0 0 0em",
    [theme.breakpoints.up("sm")]: {
      padding: "0 4em 0 4em",
    },
  },
  dashBoardGrid: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexGrow: 1,
  },
  title: {
    color: "gray",
    fontSize: "1.8em",
    margin: "10px 0 20px 0px",
    letterSpacing: "0.05em",
  },
  dojoBtn: {
    margin: "20px 0 20px 0",
    backgroundColor: "#f12d5e",
    color: "white",
    cursor: "pointer",
    width: "170px",
    textTransform: "uppercase",
    fontSize: "1em",
    border: "none",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.secondary.main,
    },
  },
}));
export default useStyles;
