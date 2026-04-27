const favoriteBooks = [];
const addFavoriteBook = function (bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
};
console.log(addFavoriteBook.name);

addFavoriteBook("The Greate Gataseby");
addFavoriteBook("Anne Sherly");
addFavoriteBook("Black Swan");

const printFavoritesBooks = function (favoriteBooksArr) {
  console.log("Favorite Books: ");
  for (book of favoriteBooksArr) {
    console.log(book);
  }
  console.log(
    `There are ${favoriteBooksArr.length} books in the favorite books`,
  );
};

printFavoritesBooks(favoriteBooks);
