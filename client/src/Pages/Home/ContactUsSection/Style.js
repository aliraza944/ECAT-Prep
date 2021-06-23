import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    backgroundImage: "linear-gradient(44deg,#FF4F64 0%,#A90041 94%)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    height: "100%",
  },
  contactText: {
    color: "rgba(0,0,0,.7)",
    fontSize: "1.6em",
    textTransform: "inherit",

    paddingTop: "10px",
    lineHeight: "1.6em",

    [theme.breakpoints.up("md")]: {
      fontSize: "1.8em",
    },
  },
}));
export default useStyles;
