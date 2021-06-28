import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ededed",
  },

  demoContent: {
    padding: "0",
    [theme.breakpoints.up("sm")]: {
      padding: "0 40px 0 40px",
    },
  },
}));
export default useStyles;
