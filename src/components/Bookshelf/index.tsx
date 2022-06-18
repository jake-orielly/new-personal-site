import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { bookList } from "./bookList";

const useStyles = makeStyles(() => ({
  bookshelfContainer: {
    margin: "1rem",
  },
  bookshelf: {
    width: "25rem",
    height: "10rem",
    backgroundColor: "grey",
    padding: "2px",
  },
  book: {
    position: "relative",
    width: "3rem",
    height: "calc(100% - 4px)",
    border: "1px solid black",
    borderRadius: "0.15rem",
    backgroundSize: "auto 10rem",
    float: "left",
    zIndex: 1,

    "&:hover": {
      filter: "brightness(80%)",
      transition: "all 0.3s ease",
    },
  },
}));

export const Bookshelf = () => {
  const classes = useStyles();

  const [selectedBook, setSelectedBook] = useState<number | undefined>();

  return (
    <div>
      <div className={classes.bookshelfContainer}>
        <div className={classes.bookshelf}>
          {bookList.map((book, i) => (
            <div
              className={classes.book}
              key={book.title}
              style={{
                backgroundImage: `url(${book.coverImage})`,
              }}
              onClick={() => {
                setSelectedBook(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
