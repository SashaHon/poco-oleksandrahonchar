"use strict";

const h1 = document.querySelector("h1"),
  p = document.querySelector("p"),
  a = document.querySelector("a");

let h1Iterator = 2;
let pIterator = 4;
let aIterator = 7;

for (let i = 0; i < 2; i++) {
  h1.textContent += i + 1;

  if (i === 0) {
    h1.textContent += ", ";
  }
}

for (let i = 0; i < pIterator; i++) {
  let content = p.textContent;
  if (i > 0 && i < 4) {
    p.textContent = i + 1 + ", " + content;
  } else {
    p.textContent = i + 1 + content;
  }
}

for (let i = 0; i < aIterator; i++) {
  a.textContent = i + 1;
}
