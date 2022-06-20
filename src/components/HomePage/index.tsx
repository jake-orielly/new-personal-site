import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import mountains from "./images/mountains.webp";
import mountainsSmall from "./images/mountains-small.webp";

export const useStyles = makeStyles(() => ({
  root: {
    "& h1": {
      marginTop: "8rem",
      marginBottom: "3rem",
      fontSize: "3.6rem",
      letterSpacing: "0.35rem",
    },
    "& h2, & h3": {
      padding: "0.5rem",
    },
    "& h3": {
      fontSize: "1rem",
      fontStyle: "italic",
    },
    "& img": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      boxShadow: "0px -1px 6px rgb(50 50 50 / 25%)",
      transition: "filter 1s ease-out",
    },
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const smallImg = mountainsSmall;
  const fullImg = mountains;
  const [src, setSrc] = useState(smallImg);
  useEffect(() => {
    setSrc(smallImg);
    const img = new Image();
    img.src = fullImg;
    img.onload = () => {
      setSrc(fullImg);
    };
  }, [smallImg, fullImg]);

  return (
    <div className={classes.root}>
      <h1> Jake O'Rielly</h1>
      <h2>Full stack software engineer</h2>
      <h2>Short fiction writer</h2>
      <h2>Outdoorsman</h2>
      <h3>San Francisco, CA</h3>
      <img
        src={src}
        style={{
          filter: src === smallImg ? "blur(20px)" : "none",
        }}
        alt=""
      />
    </div>
  );
};
