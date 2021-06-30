import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";
import { Link } from "react-router-dom";
function Navigation(props) {
  const navItems = ["physics", "math", "chemistry", "biology"];
  const homeItems = ["Signup", "Login"];
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const nav = (
    <div className={classes.navItems}>
      <div className={classes.subjectLink}>
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
      <div className={classes.registrationLinks}>
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
  );

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        {props.home
          ? homeItems.map((text) => (
              <ListItem component={Link} to={`/${text}`} button>
                <ListItemText primary={text} />
              </ListItem>
            ))
          : navItems.map((text) => (
              <ListItem component={Link} to={`/home/${text}`} button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.root}>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          className={`${classes.appBar} ${props.demo && classes.demoNav}`}
        >
          <Toolbar>
            {" "}
            <Typography variant="h5" noWrap className={classes.title}>
              <Link className="link" to="/">
                Ecat Ninja
              </Link>
            </Typography>
            <div className={classes.navItems}>
              {props.home
                ? homeItems.map((item) => {
                    return (
                      <Link to={`/${item}`} className="link">
                        <Typography
                          variant="h5"
                          noWrap
                          className={classes.title}
                        >
                          {item}
                        </Typography>
                      </Link>
                    );
                  })
                : nav}
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon style={{ fontSize: "1.8em" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
