const dateEl = document.querySelector("#date");
const contentEl = document.querySelector("#content");
const tableEl = document.querySelector("table");
let temp = "null";

tableEl.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    dateEl.value = e.target.textContent;

    temp = e.target.parentNode;
  }
});

function writeSchedule() {
  const divEl = document.createElement("div");

  divEl.textContent = contentEl.value;

  temp.append(divEl);
  contentEl.value = "";
}

/* document.querySelectorAll("tr").forEach(function (test) {
  test.addEventListener("click", (event) => {
    console.log(test.closest("table").getAttribute("name"));
  });
}); */
