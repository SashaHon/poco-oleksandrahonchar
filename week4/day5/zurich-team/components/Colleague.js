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
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(e) {
    if (e.target.matches("img")) {
      e.target.classList.add("blur");
      let article = e.target.parentElement.nextElementSibling;
      article.classList.remove("v-hidden");
    }
  }

  handleMouseLeave(e) {
    if (e.target.matches("li")) {
      e.target.firstElementChild.firstElementChild.classList.remove("blur");
      let article = e.target.lastElementChild;
      article.classList.add("v-hidden");
      console.log(article);
    }
  }

  setEvents(item) {
    item.addEventListener("mouseover", this.handleMouseOver);
    item.addEventListener("mouseleave", this.handleMouseLeave);
  }

  isEmail(address) {
    return address.split("").includes("@");
  }

  //create unclickable list of Colleague's propperties: e.g. name, jon, hobby, quote
  createDescrListItems(articleList, propsArr) {
    propsArr.forEach((listItem, i) => {
      const articleListItem = document.createElement("li");
      articleListItem.textContent = `${listItem}`;
      switch (i) {
        case 0:
          articleListItem.classList.add("bold", "fs-12em", "mb-05em");
          break;
        case 1:
          articleListItem.classList.add("italic", "mb-2em");
          break;
        case 2:
          articleListItem.textContent = `🤍  ${listItem}`;
          break;
        case 3:
          articleListItem.classList.add("italic", "mb-05em");
          articleListItem.textContent = `📖  ${listItem}`;
          break;
      }
      articleList.append(articleListItem);
    });
  }

  createLink(href, text) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    return link;
  }

  //create links to email and linkedIn
  createLinks(articleList, [email, linkedIn]) {
    const links = [
      this.createLink(`mailto:${email}`, "📩  Send Email"),
      this.createLink(linkedIn, "🔗  Go to LinkedIn"),
    ];

    links.forEach((link) => {
      const articleListItem = document.createElement("li");
      articleListItem.append(link);
      articleList.append(articleListItem);
    });
  }

  setCSSClasses(image, figcaption, figure, article, item, itemChildren) {
    image.classList.add("hw-100");
    figcaption.classList.add("v-hidden");
    figure.classList.add("hw-100");
    article.classList.add("v-hidden", "hw-100", "fs-12em");
    item.classList.add("relative");

    for (let child of itemChildren) {
      child.classList.add("absolute");
    }
  }

  appendElements(figure, image, figcaption, article, articleList, item, list) {
    figure.append(image, figcaption);
    article.append(articleList);
    item.append(figure, article);
    list.append(item);
  }
  //create list item with Colleague's image and description
  createColleague() {
    const fullName = `${this.fname} ${this.lname}`;
    const list = document.querySelector("ul"),
      item = document.createElement("li"),
      figure = document.createElement("figure"),
      image = document.createElement("img"),
      figcaption = document.createElement("figcaption"),
      article = document.createElement("article"),
      articleList = document.createElement("ul");

    //set url  of the image and it's figcaption
    image.src = this.imgUrl;
    figcaption.textContent = fullName;

    //create description of the Colleague
    this.createDescrListItems(articleList, [
      fullName,
      this.job,
      this.hobby,
      this.quote,
    ]);
    //create links
    this.createLinks(articleList, [this.email, this.linkedIn]);
    //do layout of elements
    this.appendElements(
      figure,
      image,
      figcaption,
      article,
      articleList,
      item,
      list
    );
    //set css classes for the elements
    this.setCSSClasses(image, figcaption, figure, article, item, item.children);
    //set events for the Colleague item
    this.setEvents(item);
  }
}

export default Colleague;
