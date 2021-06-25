import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",

    backgroundColor: "#ededed",
    border: "none",
    borderRadius: "16px",
  },

  title: {
    fontSize: "2em",
    color: "#3e3e3e",
    textTransform: "uppercase",
  },
  progress: {
    fontSize: "1.5em",
    color: "#6f6f6f",
    fontWeight: "normal",
  },
  subjectAvatar: {
    width: "90px",
    height: "90px",
    backgroundColor: "white",
  },
  cardButton: {
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
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& div": {
      marginBottom: "5px",

      textAlign: "left",
    },
    progressSide: {
      marginLeft: "200px",
    },
  },
}));
export default useStyles;
