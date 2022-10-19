import { createEl, uiTodo } from "./util";

const render = () => {
  const addTodoBtn = document.getElementById("addTodo");
  addTodoBtn.addEventListener("click", addTodo);
  //empty input fields
};

const addTodo = () => {
  const todo = document.getElementById("todo");
  const description = document.getElementById("description");

  if (todo.value === "" || description.value === "") {
    alert("Please fill out both fields");
  } else {
    const todoList = document.querySelector(".todo-lists");
    const showTodo = uiTodo(todo.value, description.value);

    const newTodo = createEl("li", showTodo, "todo");
    todoList.append(newTodo);
  }

  //empty input fields
  todo.value = "";
  description.value = "";
};

render();
