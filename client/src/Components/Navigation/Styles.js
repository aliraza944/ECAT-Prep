import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },

  demoNav: {
    backgroundColor: "black",
    color: "white",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    justifyContent: "flex-end",
    marginRight: theme.spacing(0),
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navItems: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(4),
  },
  logo: {
    width: "10%",
    height: "",
  },
}));
export default useStyles;
