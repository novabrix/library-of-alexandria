"use strict";
const bestBooks = document.querySelector(".bestBooks");
const bookCount = 6;

/*
  == TASKS:
  1. Style the create book modal window 
  2. Complete logic for librarian function (done)
  3. Add footer (work)
  4. Add functionality to create book modal window
  5. Small checkout page
 */

class Book {
  constructor(name, author, rating, genre, published, descr, mainChar) {
    this.name = name;
    this.author = author;
    this.rating = `${rating}/5`;
    this.genre = genre;
    this.published = published;
    this.descr = descr;
    this.mainChar = mainChar;
    this.refinedDescr = `'${name}' was written by ${this.author} in
    ${this.published}. It is a ${this.genre} about ${this.descr}.`;
    this.bookID = crypto.randomUUID();
  }
}

const library = [];

function librarian(
  nameX,
  authorX,
  ratingX,
  genreX,
  publishedX,
  descrX,
  mainCharX
) {
  console.log(`libary`);
  const tempBook = new Book(
    nameX,
    authorX,
    ratingX,
    genreX,
    publishedX,
    descrX,
    mainCharX
  );

  const bookshelf = document.createElement("div");
  bookshelf.className = "bookshelf";
  const actualBook = document.createElement("div");
  actualBook.className = "book";
  const bookCover = document.createElement("div");
  bookCover.className = "bookCover";
  const bookDescr = document.createElement("div");
  bookDescr.className = "bookDescr";
  const bookIMG = document.createElement("img");
  bookIMG.className = "bookIMG";
  const bookTitle = document.createElement("h2");
  bookTitle.className = "bookTitle";
  const bookAuthor = document.createElement("h3");
  bookAuthor.className = "bookAuthor";
  const bookRating = document.createElement("h3");
  bookRating.className = "bookRating";
  const bookGenre = document.createElement("h3");
  bookGenre.className = "bookGenre";
  const bookCheckout = document.createElement("button");
  bookCheckout.className = "bookCheckout";

  bestBooks.appendChild(bookshelf);
  bookshelf.appendChild(actualBook);
  actualBook.appendChild(bookCover);
  actualBook.appendChild(bookDescr);
  bookCover.appendChild(bookIMG);

  bookDescr.appendChild(bookTitle);
  bookDescr.appendChild(bookAuthor);
  bookDescr.appendChild(bookRating);
  bookDescr.appendChild(bookGenre);
  bookDescr.appendChild(bookCheckout);
    /* bookAuthor,
    bookRating,
    bookGenre,
    bookCheckout */

  bookIMG.src = "img/unknownBookIMG.jpg";
  bookTitle.textContent = nameX;
  bookAuthor.textContent = `By ${authorX}`
  bookRating.textContent = `Rating: ${ratingX}/5`
  bookGenre.textContent = `Genre: ${genreX}`
  bookCheckout.textContent = `Check Out!`

}
librarian(
  "The Hobbit",
  "J.R.R Tolkien",
  4.5,
  "Fantasy Novel",
  1937,
  "a small hobbit who goes on an adventure with an old wizard to recover stolen treasure from a dragon. The story is about metamorphosis and how one can change for the better."
);
