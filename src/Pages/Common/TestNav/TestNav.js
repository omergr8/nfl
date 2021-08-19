import classes from "../PrimaryNavbar/PrimaryNavbar.module.scss";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const navLinks1 = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Player Profile",
    route: "/playerprofile",
  },
  {
    name: " NFL Draft",
    route: "/draft",
  },
  {
    name: "Scores",
    route: "/scoreboard",
  },
  {
    name: "Schedule",
    route: "/schedule",
  },
  {
    name: "Standings",
    route: "/standings",
  },
  {
    name: "Stats",
    route: "/stats",
  },
  {
    name: "Teams",
    route: "/teams",
  },
  {
    name: "Injuries",
    route: "/injuries",
  },
];
const navLinks2 = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Stats",
    route: "/teams/stats",
  },
  {
    name: "Schedule",
    route: "/teams/schedule",
  },
  {
    name: "Roster",
    route: "/teams/roster",
  },
  {
    name: "Depth Chart",
    route: "/teams/depth-chart",
  },
  {
    name: "Injuries",
    route: "/teams/injuries",
  },
  {
    name: "Transactions",
    route: "/transactions",
  },
  {
    name: "Blog",
    route: "/teams/blog",
  },
];
const TestNav = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <ul className={classes.nav__submenu}>
      {location.pathname.startsWith("/teams")
        ? navLinks2.map((nl, i) => (
            <li className={classes.nav__submenuItem}>
              <NavLink to={nl.route} exact activeClassName={classes.activeNav}>
                {nl.name}
              </NavLink>
            </li>
          ))
        : navLinks1.map((nl, i) => (
            <li className={classes.nav__submenuItem}>
              <NavLink to={nl.route} exact activeClassName={classes.activeNav}>
                {nl.name}
              </NavLink>
            </li>
          ))}
    </ul>
  );
};
export default TestNav;
