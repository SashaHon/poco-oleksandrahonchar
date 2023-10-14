function sayHello() {
  let name = prompt("What's your name?", "Enter your name, please");
  return print("Hello, " + name);
}

function countCharNum() {
  let input = prompt("Write something", "just type something");
  return alert(
    "Your input is: " +
      input +
      " ." +
      "Number of characters in your string is: " +
      input.length +
      "."
  );
}

function createQuote() {
  let quote = prompt("Enter a famous quote", "the qoute");
  let author = prompt("Who is the author of this quote?", "author name");

  return alert(`${author} says, "${quote}"`);
}

function fortuneTeller() {
  let childrenNum = prompt("How many childen do you want?", 0),
    partnerName = prompt("What name do you want for your partner?", "Prince"),
    location = prompt("Where do you want to live?", "Switzerland"),
    job = prompt("What job do you want to have?", "President?");

  return alert(
    `"You will be a ${job} in ${location}, and married to ${partnerName} with ${childrenNum} kids."`
  );
}

function ageCalculator() {
  const dateBirth = prompt("Enter your date of birth", 2000),
    year = prompt("Which year do you want to know your age?", 3000);

  return alert(
    `You will be either ${year - dateBirth} or ${
      year - dateBirth - 1
    } in ${year}`
  );
}

function run() {
  //   sayHello();
  //   countCharNum();
  //  createQuote();
    fortuneTeller();
  //  ageCalculator();
}

run();
