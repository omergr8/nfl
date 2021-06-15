import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classes2 from "./PrimaryNavbar.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../../../Assets/logo.svg";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black !important",
    height: "40px",
  },
  bar: {
    textAlign: "center",
    margin: "auto",
    width: "85%",
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    marginBottom: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimaryNavbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const links = (
    <ul className={classes2.menu}>
      <li>
        <a href="#">NFL</a>
      </li>
      <li>
        <a href="#">NCAAF</a>
      </li>
      <li>
        <a href="#">STATS</a>
      </li>
      <li>
        <a href="#">FANTASY</a>
      </li>
      <li>
        <a href="#">ARTICLES</a>
      </li>
      <li>
        <a href="#">NEWS</a>
      </li>
      <li>
        <a href="#">HELP</a>
      </li>
      <li>
        <a href="#">ABOUT</a>
      </li>
    </ul>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {" "}
        <a href="#">NFL</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">NCAAF</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">STATS</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">FANTASY</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">ARTICLES</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">NEWS</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">HELP</a>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          //   className={classes2.account}
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <SearchIcon />
          <label className={classes2.label}>LOGIN</label>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <div className={classes2.box}></div>
      <Divider className={classes2.divider} />
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.bar}>
          <Typography className={classes.title} variant="h6" noWrap>
            <img width="70px" src={logo} alt="logo" />
          </Typography>

          <div className={classes.sectionDesktop}>
            {links}
            <div className={classes.grow} />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              //   className={classes2.account}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <SearchIcon />
              <label className={classes2.label}>LOGIN</label>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
