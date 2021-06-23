import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  briefIntro: {
    background: "#f9f9f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  intro: {
    paddingTop: "20px",

    [theme.breakpoints.up("md")]: {
      padding: "50px 50px",
    },
  },
}));
export default useStyles;
