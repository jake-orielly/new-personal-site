import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100%",
    padding: "1rem",
    borderBottom: "1px solid black",
    height: "2rem",
    fontSize: "1.25rem",

    "& nav": {
      margin: 0,
      position: "absolute",
      top: "50%",
      MStransform: "translateY(-50%)",
      transform: "translateY(-50%)",
      "& a": {
        color: "inherit",
        textDecoration: "none",
        margin: "0rem 0.8rem",

        "&:hover": {
          color: "#544B3DAA",
        },
      },
    },
  },
  activeStyle: {
    color: "red",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const links = [
    { path: "/", text: "Home Page" },
    { path: "/blog", text: "Blog" },
    { path: "/recent-reads", text: "Recent Reads" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <div className={classes.root}>
      <nav>
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.text}
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline", color: "inherit" } : {}
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
