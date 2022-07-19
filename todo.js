const inputTask = document.querySelector(".input-task");
const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");

console.log(inputTask, addBtn, todoList);

addBtn.addEventListener("click", () => {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "할 일을 입력해주세요");
  } else {
    const addLi = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    checkBox.addEventListener("click", () => {
      if (checkBox.checked === true) {
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "none";
      }
    });
    const deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "삭제");
    // deleteBtn.setAttribute("onclick", "deleteTask(this");

    addLi.append(checkBox, inputTask.value, deleteBtn);

    todoList.append(addLi);

    inputTask.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (
    e.target.tagName === "INPUT" &&
    e.target.getAttribute("type") === "button"
  ) {
    e.target.parentNode.remove();
  }
});

// function deleteTask(t) {
//   t.parentNode.remove();
// }
