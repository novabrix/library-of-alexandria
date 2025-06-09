"use strict";
const bestBooks = document.querySelector(".bestBooks");
const checkoutCounter = document.querySelector('.checkoutCounter');
let bookCount = 0;
let checkoutCount = 0;


/*
  == TASKS:
  1. Style the create book modal window (done)
  2. Complete logic for librarian function (done)
  3. Add footer (skipped)
  4. Add functionality to create book modal window (done)
  5. Checkout functionality
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

  let bookshelf;
  if (bookCount % 3 === 0) {
    bookshelf = document.createElement("div");
    bookshelf.className = "bookshelf";
  } else {
    const bookshelves = document.querySelectorAll(".bookshelf");
    bookshelf = bookshelves[bookshelves.length - 1];
  }

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

  if (bookCount % 2) {
    bookIMG.src = "img/bookIMG/redBook.jpg";
  } else if (bookCount % 3) {
    bookIMG.src = "img/bookIMG/greenBook.jpg"
  } else if (bookCount % 5) {
    bookIMG.src = "img/bookIMG/blueBook.jpg"
  } else {
    bookIMG.src = "img/bookIMG/purpleBook.jpg"
  }
 /*  bookIMG.src = "img/bookIMG/redBook.jpg"; */
  bookTitle.textContent = nameX || "Unknown";
  bookAuthor.textContent = `By ${authorX || "Anonymous"}`;
  bookRating.textContent = `Rating: ${ratingX || 0}/5`;
  bookGenre.textContent = `Genre: ${genreX || "Misc/Other"}`;
  bookCheckout.textContent = `Add to Cart!`;

  bookCheckout.addEventListener("click", function (e) {
    bookCheckout.classList.add("clicked");
    bookCheckout.classList.remove("bookCheckout")
    bookCheckout.textContent = "Added to Cart!";
    checkoutCount++;
    checkoutCounter.textContent = checkoutCount;
  });

  const bookID = tempBook.bookID;
  bookCount++;
}

librarian(
  "The Hobbit",
  "J.R.R Tolkien",
  4.5,
  "Fantasy Novel",
  1937,
  `a small hobbit who goes on an adventure with an old wizard to recover stolen
  treasure from a dragon. The story is about metamorphosis and how one can
  change for the better.`
);

librarian(
  "Animal Farm",
  "George Orwell",
  4.6,
  "Allegorical Fable",
  1937,
  `a small hobbit who goes on an adventure with an old wizard to recover stolen
  treasure from a dragon. The story is about metamorphosis and how one can
  change for the better.`
);

librarian(
  "Atomic Habits",
  "James Clear",
  4.8,
  "Self-Help",
  2018,
  `how seemingly small changes, like getting 1% better everyday, result in large gains over time.`
);

;

let okSignal = true;
const modalReal = document.querySelector(".modal");

function modalHub() {
  if (okSignal) {
    okSignal = false;
    openModal();
  } else if ((okSignal = false)) {
    okSignal = true;
    closeModal();
  }
}

const openModal = () => {
  okSignal = false;
  modalReal.classList.remove("hidden");
};

const closeModal = () => {
  okSignal = true;
  modalReal.classList.add("hidden");
};

const submitter = document.querySelector("#submitter");
const namer = document.querySelector("#namer");
const author = document.querySelector("#author");
const rater = document.querySelector("#rater");
const genre = document.querySelector("#genre");
const publishers = document.querySelector("#publisher");
const mainChars = document.querySelector("#mainChars");
const descriptor = document.querySelector("#descriptor");

function sendModal() {
  const newBook = [
    namer.value,
    author.value,
    rater.value,
    genre.value,
    publishers.value,
    descriptor.value,
    mainChars.value,
  ];
  librarian(...newBook);
  closeModal();
}
