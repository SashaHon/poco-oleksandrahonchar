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

  onMouseOver(e) {
    if (e.target.matches("li")) {
      console.log("yes");
    }
    // console.log(e.target.matches("li"));
  }

  onMouseLeave(e) {
    console.log("left");
  }

  setEvents(item) {
    item.addEventListener("mouseover", this.onMouseOver);
    item.addEventListener("mouseleave", this.onMouseLeave);
  }

  createLi() {
    const list = document.querySelector("ul");
    const item = document.createElement("li");

    item.classList.add("list_item");
    item.style.backgroundImage = `url(${this.imgUrl})`;

    // const colleagueInfo = document.createElement("article");
    // // console.log(colleagueInfo);
    // colleagueInfo.innerText = `${this.fname} ${this.lname}`;
    // // colleagueInfo.classList.add("text-hidden");
    // colleague.append(colleagueInfo);
    list.append(item);
    this.setEvents(item);
  }

  createCollegue(item) {
    this.createLi();
  }
}

colleaguesDB.forEach((obj, index) => {
  let { fname, lname, email, job, hobby, quote, linkedIn, imgUrl } = { ...obj };
  let item = new Colleague(
    fname,
    lname,
    email,
    job,
    hobby,
    quote,
    linkedIn,
    imgUrl
  );
  item.createCollegue(item);
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
