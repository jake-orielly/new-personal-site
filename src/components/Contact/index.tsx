import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  emailText: {
    fontSize: "1.6rem",
    marginTop: "4rem",
  },
  jobText: {
    fontSize: "1.1rem",
    marginTop: "2rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.emailText}>
        You can email me at{" "}
        <a href="mailto: jake.orielly@gmail.com">jake.orielly@gmail.com</a>
      </p>
      <p className={classes.jobText}>
        I'm very happy at my current job and am not seeking new work at this
        time.{" "}
      </p>
    </div>
  );
};
