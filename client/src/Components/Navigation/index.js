import React from "react";
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
  const navItems = ["Physics", "Maths", "Chemistry", "Biology"];
  const homeItems = ["signup", "login"];
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        {props.home
          ? homeItems.map((text) => (
              <Link className="link" to={`/${text}`}>
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))
          : navItems.map((text) => (
              <ListItem button key={text}>
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
            <Typography variant="h5" noWrap className={classes.title}>
              Ecat Ninja
            </Typography>
            <div className={classes.navItems}>
              {props.home
                ? homeItems.map((item) => {
                    return (
                      <Typography variant="h5" noWrap className={classes.title}>
                        {item}
                      </Typography>
                    );
                  })
                : navItems.map((item) => {
                    return (
                      <Typography variant="h6" noWrap className={classes.title}>
                        {item}
                      </Typography>
                    );
                  })}
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
          <Hidden smUp>
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
