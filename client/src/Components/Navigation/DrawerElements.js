import React from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(4),
    textTransform: "capitalize",
  },
}));

const DrawerElements = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />

      {props.home ? (
        <List className={classes.title}>
          <ListItem component={Link} to="/signup">
            <ListItemText primary="Sign Up" />
          </ListItem>
          <ListItem component={Link} to="/login">
            <ListItemText primary="Log In" />
          </ListItem>
        </List>
      ) : (
        <List className={classes.title}>
          <ListItem component={Link} to="/home/physics">
            <ListItemText primary="Physics" />
          </ListItem>
          <ListItem component={Link} to="/home/chemistry">
            <ListItemText primary="Chemistry" />
          </ListItem>
          <ListItem component={Link} to="/home/math">
            <ListItemText primary="Math" />
          </ListItem>
          <ListItem component={Link} to="/home/biology">
            <ListItemText primary="Biology" />
          </ListItem>
          {props.isLoggedIn ? (
            <>
              {" "}
              <ListItem component={Link} to="/home">
                <ListItemText primary="Hey stranger" />
              </ListItem>
              <ListItem component={Button}>
                <ListItemText primary="Log Out" />
              </ListItem>
            </>
          ) : (
            <>
              {" "}
              <ListItem component={Link} to="/signup">
                <ListItemText primary="Sign Up" />
              </ListItem>
              <ListItem component={Link} to="/login">
                <ListItemText primary="Log In" />
              </ListItem>
            </>
          )}
        </List>
      )}
    </div>
  );
};

export default DrawerElements;
