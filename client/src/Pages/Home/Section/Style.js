import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    height: "100%",
  },
  landingpagetypo: {
    color: "rgba(0,0,0,.7)",
    fontSize: "1.6em",
    textTransform: "inherit",

    paddingTop: "10px",
    lineHeight: "1.6em",

    [theme.breakpoints.up("md")]: {
      fontSize: "2em",
    },
  },
}));
export default useStyles;
