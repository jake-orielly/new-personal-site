import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100%",
    paddingBottom: "1rem",
    borderBottom: "1px solid black",
    height: "2rem",

    "& nav": {
      margin: 0,
      position: "absolute",
      top: "50%",
      MStransform: "translateY(-50%)",
      transform: "translateY(-50%)",
      "& a": {
        color: "black",
        textDecoration: "none",
        margin: "0rem 0.5rem",
      },
    },
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav>
        <Link to="/">{"Home Page"}</Link>
        <Link to="/blog">{"Blog"}</Link>
        <Link to="/recentReads">{"Recent Reads"}</Link>
      </nav>
    </div>
  );
};
