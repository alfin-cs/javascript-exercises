const getTheTitles = function (main) {
  let obj = main.map((book) => {
    return book.title;
  });
  return obj;
};
const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

// Do not edit below this line
module.exports = getTheTitles;
