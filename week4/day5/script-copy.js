import { colleaguesDB } from "./colleaguesDB.js";

class Colleague {
  constructor(fname, lname, email, job, hobby, quote, linkedIn, imgUrl) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.job = job;
    this.hobby = hobby;
    this.quote = quote;
    this.linkedIn = linkedIn;
    this.imgUrl = imgUrl;
  }

  //methods: send an email
  //go to linkedIn

  createLi() {
    const list = document.querySelector("ul");
    const colleague = document.createElement("li");
    colleague.classList.add("list_item");
    colleague.style.backgroundImage = `url(${this.imgUrl})`;

    // const colleagueInfo = document.createElement("article");
    // // console.log(colleagueInfo);
    // colleagueInfo.innerText = `${this.fname} ${this.lname}`;
    // // colleagueInfo.classList.add("text-hidden");
    // colleague.append(colleagueInfo);
    console.log(this.imgUrl);
    list.append(colleague);
  }

  createCollegue() {
    this.createLi();
  }
}

colleaguesDB.forEach((obj, index) => {
  let { fname, lname, email, job, hobby, quote, linkedIn, imgUrl } = { ...obj };
  let a = new Colleague(
    fname,
    lname,
    email,
    job,
    hobby,
    quote,
    linkedIn,
    imgUrl
  );
  a.createCollegue();
});

// let list = document.querySelector("ul");

// function mouseOverHandler(e) {
//   if (e.target.matches("li")) {
//     let article = e.target.querySelector("article");
//     article.classList.remove("text-hidden");
//     article.classList.add("no-blur");
//   }
// }

// function mouseLeaveHandler(e) {
//   //   console.log(e.target);
//   /// delete text from LI once you leave;
// }

// list.addEventListener("mouseover", mouseOverHandler);
// list.addEventListener("mouseleave", mouseLeaveHandler);
