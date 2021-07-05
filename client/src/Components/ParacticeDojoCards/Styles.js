import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "325px",
    minWidth: 275,
    backgroundColor: "#ededed",
    borderRadius: "16px",
    padding: "0",
    boxShadow: "none",
  },

  title: {
    fontSize: 14,
  },
  content: {
    fontSize: "1.5em",
  },
  bold: {
    fontSize: "1.8em",
  },
}));
export default useStyles;
