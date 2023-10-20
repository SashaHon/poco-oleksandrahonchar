var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

if (books) {
  let main = document.querySelector("main");
  let list = document.createElement("ul");
  list.classList.add("list");
  main.append(list);

  books.forEach((book) => {
    let list_item = document.createElement("li"),
      description = document.createElement("p"),
      link = document.createElement("a"),
      img = document.createElement("img");

    img.classList.add("image");
    description.textContent = `Book title: ${book.title} , Author: ${book.author}`;

    if (book.title === "The Design of EveryDay Things") {
      let address =
        "https://images.thalia.media/00/-/7af606161751431f8396dc12160932eb/design-of-everyday-things-taschenbuch-don-norman-englisch.jpeg";
      img.src = address;
      link.href = address;
    }
    if (book.title === "The Most Human Human") {
      let address =
        "https://images.thalia.media/-/BF2000-2000/d2bd20cc4e1b4835ad6eee81b9ab2963/the-most-human-human-taschenbuch-brian-christian-englisch.jpeg";
      img.src = address;
      link.href = address;
    }

    list_item.classList.add("list_item");
    if (book.alreadyRead === false) {
      img.classList.add("not-read");
    }
    link.append(img);
    list_item.prepend(link);
    list_item.append(description);
    list.append(list_item);
  });
}
