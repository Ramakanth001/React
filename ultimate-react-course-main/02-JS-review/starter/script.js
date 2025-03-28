const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const books = getBooks();
const book = getBook(2);
book;
// const author = book.author;

// console.log(book);

// author;
const {title, author, genres} = book;
console.log(title);

// Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
genres;
// console.log(otherGenres)

// Spread operator
const newGenres = [ 'joro', ...genres, 'comedy']
// console.log(newGenres)

const updatedBook = { ...book, moviePublicationDate: "2001-12-19", pages: 1210 };
// console.log(updatedBook);

const newBookWoo = {...book, review: 'Good',  hit: 'yes'};
// console.log(newBookWoo)


//Template Literal
console.log(`I read a book named ${title}`)

const pages = book.pages;

const myReview = `I have recently read a book named ${title}. It is really good and it's primary genre is ${book.genres[0]}. It was published by ${book.author} in the year ${book.publicationDate.split('-')[0]}`;
console.log(myReview);

const pageRange = book.pages > 1000 ? `${book.title} has greater than 1000 pages` : `${book.title} has less than or equal to 1000 pages`;

console.log(pageRange);

//Arrow function
const yearOfPublication = (publicationDatee) => publicationDatee.split('-')[0];
console.log(yearOfPublication(book.publicationDate));

// Short circuting and logical opetators
// falsy: 0, '', null, undefined
console.log("jonas" && "Some string" );
console.log(0 && "Some string");
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

// imported data from demoData file
const myData = require('./demoData');
// console.log(myData);

function getMyBook(id) {
  return myData.find((d) => d.id === id);
}

// console.log(myData.reviews.goodreads.reviewsCount);
const myBook = getMyBook(4);
console.log(myBook);

function getTotalReviewsCount(myBook){
  // const a = myBook.reviews.goodreads.reviewsCount;
  // const b = myBook.reviews.librarything.reviewsCount;
  // console.log(a,b);
  return myBook.reviews.goodreads.reviewsCount + myBook.reviews.librarything.reviewsCount;
}

console.log(getTotalReviewsCount(myBook));

// optinal chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();
console.log(books);
console.log("Woo");
console.log(getTotalReviewCount(myBook))

