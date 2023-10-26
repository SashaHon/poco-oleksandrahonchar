import { data } from "./data/client-data.js";

const formRadio = document.querySelector(".form-radio");
const formList = document.querySelector(".form-list");
const ul = document.querySelector("ul");
const client_input = formList.lastElementChild.lastElementChild;

formList.addEventListener("submit", submitHandler);
formRadio.addEventListener("change", changeHandler);

function changeHandler(e) {
  if (e.target.checked && e.target.value === "alphabet") {
    render(data.sort((a, b) => (a.value < b.value ? -1 : 1)));
  } else {
    render(data.sort((a, b) => (a.name < b.name ? -1 : 1)));
  }
}

function toggleCheck(e) {
  data.forEach((obj) => {
    if (obj.name === e.target.name) {
      obj.checked = !obj.checked;
    }
  });
  render(data);
}

function submitHandler(e) {
  e.preventDefault();
  if (!client_input.value) return;
  if (!client_input.value.trim()) {
    client_input.value = "";
    return;
  }
  console.log(client_input.value.toLowerCase());
  data.push({
    value:
      client_input.value[0].toUpperCase() +
      client_input.value.slice(1).toLowerCase(),
    name: `do-${data.length + 1}`,
    id: `do-${data.length + 1}`,
    checked: false,
  });
  client_input.value = "";

  render(data);
}

function render(data) {
  ul.querySelectorAll("li").forEach((el) => el.remove());

  data.forEach((obj) => {
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const list_item = document.createElement("li");

    checkbox.type = "checkbox";
    checkbox.value = obj.value;
    checkbox.name = obj.name;
    checkbox.id = obj.id;
    checkbox.classList.add("mr-1em");
    checkbox.addEventListener("change", toggleCheck);
    checkbox.checked = obj.checked;

    label.for = `${checkbox.name}`;
    label.textContent = obj.value;

    list_item.append(checkbox, label);
    ul.append(list_item);
  });
}

//next step - add to local storage; read about it here: https://blog.logrocket.com/localstorage-javascript-complete-guide/#:~:text=localStorage%20is%20a%20property%20that,browser%20or%20restarts%20the%20computer.
