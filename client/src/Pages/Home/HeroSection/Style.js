import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heroSection: {
    backgroundImage: "linear-gradient(44deg,#FF4F64 0%,#A90041 94%)",
    padding: "0 0 8em 0",
    color: "white",
  },
  MuiTypography: {
    h2: {
      fontSize: "2em",
      textAlign: "center",
    },
  },
  heroContainer: {
    marginTop: "80px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
  },
  heroImage: {
    width: "100%",
  },
  heroButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  heroContnet: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "100px",
  },
}));
export default useStyles;
