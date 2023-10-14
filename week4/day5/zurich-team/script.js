import { colleagues } from "./data/colleagues.js";
import Colleague from "./components/Colleague.js";

colleagues.forEach((obj) => {
  let { fname, lname, email, job, hobby, quote, linkedIn, imgUrl } = { ...obj };
  let db = new Colleague(
    fname,
    lname,
    email,
    job,
    hobby,
    quote,
    linkedIn,
    imgUrl
  );
  db.createColleague();
});
