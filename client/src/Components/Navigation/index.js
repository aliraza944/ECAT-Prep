import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";
import { Link } from "react-router-dom";
import { NavElements } from "./NavElements";
import DrawerElements from "./DrawerElements";
function Navigation(props) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
            <NavElements home={props.home} isLoggedIn={isLoggedIn} />
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
              <DrawerElements home={props.home} isLoggedIn={isLoggedIn} />
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
