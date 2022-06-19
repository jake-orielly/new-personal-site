import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  nameText: {
    marginTop: "8rem",
    fontSize: "2.6rem",
  },
  descriptionText: {
    marginTop: "3rem",
    fontSize: "1.6rem",
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.nameText}>My name is Jake O'Rielly.</h1>
      <h2 className={classes.descriptionText}>
        I'm a full stack software engineer, short fiction writer, and avid novel
        reader based in San Francisco.
      </h2>
    </div>
  );
};
