import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "linear-gradient(44deg,#FF4F64 0%,#A90041 94%)",
    padding: "10px 10px",
    [theme.breakpoints.up("sm")]: {
      padding: "60px 60px",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  detailButtons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    color: "white",
    marginTop: "40px",
    marginBottom: "40px",
  },
  sectionDescription: {
    padding: "10px 40px 10px 40px",
    textAlign: "center",
  },
  sectionText: {
    color: "rgba(255,255,255,.8)",
    lineHeight: "1.8em",
    fontSize: "1.5em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2em",
    },
  },
  sectionImageContainer: {
    marginTop: "80px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
  },
  sectionImage: {
    width: "100%",
    border: "4px solid #ffff",
    borderRadius: "40px ",
  },
}));
export default useStyles;
