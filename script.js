"use strict";

const library = [
  theHobbit = new Book(
    "The Hobbit",
    "J.R.R Tolkien",
    4.5,
    "fantasy novel",
    1937,
    "a small hobbit who goes on an adventure with an old wizard to recover stolen treasure from a dragon. The story is about metamorphosis and how one can change for the better."
  ),
];

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
  }
}

function librarian () {
  for (const book of library) {
    const bookshelf = document.createElement("div");
    bookshelf.className = "bookshelf";
  }
}
librarian()
