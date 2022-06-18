import { makeStyles } from "@material-ui/styles";
import { Book } from "./types";

const useStyles = makeStyles(() => ({
  bookCover: {
    height: "20rem",
  },
}));

interface Props {
  book: Book;
}

export const SelectedBookDisplay = ({ book }: Props) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <img
          className={classes.bookCover}
          alt={`The cover of the book ${book.title}`}
          src={book.coverImage}
        />
        <p>{book.title}</p>
        <p>{`By: ${book.authorFirst} ${book.authorLast}`}</p>
      </div>
    </div>
  );
};
