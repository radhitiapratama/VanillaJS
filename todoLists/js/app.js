const addTodo = document.querySelector(".todo-header .todoButton");
const inputTodo = document.querySelector(".todo-header .todoInput");
const filter = document.querySelector(".todo-body .inputFilter");

addTodo.addEventListener("click", function () {
  createTodo();
});

function createTodo() {
  const todoValue = inputTodo.value;
  const todoWrapper = document.querySelector(".todoLists-wrapper");

  const newBox = document.createElement("div");
  newBox.classList.add("todo-box");

  const todoText = document.createElement("p");
  todoText.classList.add("todoText");

  const todoDone = document.createElement("div");
  todoDone.classList.add("todoDone");
  todoDone.textContent = "Done";

  todoText.textContent = todoValue;

  newBox.appendChild(todoText);
  newBox.appendChild(todoDone);

  todoWrapper.appendChild(newBox);
  inputTodo.value = "";
}

const todoWrapper = document.querySelector(".todoLists-wrapper");
todoWrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("todoDone")) {
    const todoBox = document.querySelector(".todo-box");
    todoBox.style.transform = "scale(0)";
    setTimeout(() => {
      todoBox.remove();
    }, 310);
  }
});

filter.addEventListener("keyup", function () {
  searchTodo();
});

function searchTodo() {
  const value = filter.value;
  const text = document.querySelectorAll(".todo-box .todoText");
  text.forEach((el) => {
    el.parentElement.style.display = "none";
    if (el.textContent.toUpperCase().includes(value.toUpperCase())) {
      el.parentElement.style.display = "flex";
    } else if (value == null) {
      el.parentElement.style.display = "flex";
    }
  });
}
