import { sortBy } from "lodash";
import {
  borne,
  futureHome,
  theHare,
  threeBody,
  terraIgnota,
  wildSeed,
  anArtist,
  restAnd,
} from "./images";

interface Book {
    title: string;
    authorFirst: string;
    authorLast: string;
    coverImage: string;
  }

export const bookList: Book[] = sortBy(
    [
      {
        title: "Borne",
        authorFirst: "Jeff",
        authorLast: "VanderMeer",
        coverImage: borne,
      },
      {
        title: "Future Home of the Living God",
        authorFirst: "Louise",
        authorLast: "Erdrich",
        coverImage: futureHome,
      },
      {
        title: "The Hare",
        authorFirst: "Melanie",
        authorLast: "Finn",
        coverImage: theHare,
      },
      {
        title: "The Three-Body Problem",
        authorFirst: "Cixin",
        authorLast: "Liu",
        coverImage: threeBody,
      },
      {
        title: "Too Like the Lightning",
        authorFirst: "Ada",
        authorLast: "Palmer",
        coverImage: terraIgnota,
      },
      {
        title: "Wild Seed",
        authorFirst: "Octavia",
        authorLast: "Butler",
        coverImage: wildSeed,
      },
      {
        title: "An artist of the Floating World",
        authorFirst: "Kazuo",
        authorLast: "Ishiguro",
        coverImage: anArtist,
      },
      {
        title: "My Year of Rest and Relaxation",
        authorFirst: "Ottessa",
        authorLast: "Moshfegh",
        coverImage: restAnd,
      },
    ],
    ["authorLast", "authorFirst"]
  );