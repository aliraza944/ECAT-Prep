import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useLogout } from "../../Hooks/useLogout";
const useStyles = makeStyles((theme) => ({
  navItems: {
    display: "none",
    width: "80%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  Links: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(4),
    textTransform: "capitalize",
  },
}));

export const NavElements = (props) => {
  const classes = useStyles();
  const handleLogout = useLogout();
  return (
    <>
      {props.home ? (
        <div
          className={classes.navItems}
          style={{ justifyContent: "flex-end" }}
        >
          <div className={classes.Links}>
            <Link to="/signup" className="link">
              <Typography variant="h6" noWrap className={classes.title}>
                Sign Up
              </Typography>
            </Link>{" "}
            <Link to="/login" className="link">
              <Typography variant="h6" noWrap className={classes.title}>
                Login
              </Typography>
            </Link>
          </div>
        </div>
      ) : (
        <div className={classes.navItems}>
          <div className={classes.Links}>
            <Link to="/home/physics" className="link">
              <Typography variant="h6" noWrap className={classes.title}>
                Physics
              </Typography>
            </Link>
            <Link to="/home/chemistry" className="link">
              <Typography variant="h6" noWrap className={classes.title}>
                chemistry
              </Typography>
            </Link>
            <Link to="/home/math" className="link">
              <Typography variant="h6" noWrap className={classes.title}>
                Math
              </Typography>
            </Link>
            <Link to="/home/biology" className="link">
              <Typography variant="h6" noWrap className={classes.title}>
                Biology
              </Typography>
            </Link>
          </div>
          {props.isLoggedIn.name ? (
            <div className={classes.Links}>
              <Link to="/home" className="link">
                <Typography variant="h6" noWrap className={classes.title}>
                  {props.isLoggedIn.name}
                </Typography>
              </Link>{" "}
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className={classes.Links}>
              <Link to="/signup" className="link">
                <Typography variant="h6" noWrap className={classes.title}>
                  Sign Up
                </Typography>
              </Link>{" "}
              <Link to="/login" className="link">
                <Typography variant="h6" noWrap className={classes.title}>
                  Login
                </Typography>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};
