const imgTags = document.querySelectorAll("img");
const pTag = document.querySelector("p");

imgTags.forEach((img) => {
  img.addEventListener("error", () => {
    // alert("error");
    img.src =
      "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png";
  });
});
