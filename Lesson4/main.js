let todoList = [];

const todoListElm = document.getElementById("todoList");
const inputTodoElm = document.getElementById("inputTodo");
const addBtn = document.getElementById("add-btn");
document.get
const handleDeleteTodo = (deleteId) => {
  const deleteIndex = todoList.findIndex((todo) => todo.id === deleteId);
  todoList.splice(deleteIndex, 1);
  renderTodoList();
  saveLocalStorage();
};

const handleChangeStatus = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  todoList[index].completed = !todoList[index].completed;
  saveLocalStorage();
};

const renderTodoList = () => {
  todoListElm.innerHTML = "";
  todoList.forEach((todo) => {
    const todoElm = document.createElement("div");
    todoElm.classList.add("todo");

    const inputElm = document.createElement("input");
    inputElm.setAttribute("type", "checkbox");
    inputElm.checked = todo.completed;
    inputElm.addEventListener("change", () => handleChangeStatus(todo.id));

    const spanElm = document.createElement("span");
    spanElm.textContent = todo.title;

    const iconElm = document.createElement("i");
    iconElm.classList.add("bi", "bi-trash3-fill");
    iconElm.addEventListener("click", () => handleDeleteTodo(todo.id));

    todoElm.appendChild(inputElm);
    todoElm.appendChild(spanElm);
    todoElm.appendChild(iconElm);
    todoListElm.appendChild(todoElm);
  });
};

const handleAddTodo = () => {
  if (inputTodoElm.value === "") {
    alert("ban can phai nhap gi do");
  } else {
    todoList.unshift({
      id: Math.floor(Math.random() * 10000),
      title: inputTodoElm.value,
      completed: false,
    });
    renderTodoList();
    inputTodoElm.value = "";
    saveLocalStorage();
  }
};

// const saveLocalStorage = () => {
//   localStorage.setItem('todos', JSON.stringify(todoList));
// }

// const getLocalStorage = () => {
//   const todoListLocal = JSON.parse(localStorage.getItem('todos'));
//   if(todoListLocal) {
//     todoList = todoListLocal;
//   }
//   renderTodoList();
// }

addBtn.addEventListener("click", handleAddTodo);

// getLocalStorage();

const getTodoList = () => {
  fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      todoList = data;
      renderTodoList();
    });
};

getTodoList();

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    address: {
      street: "Kulas Light",
      city: "Gwenborough",
    },
    company: {
      name: "Vingroup",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    address: {
      street: "Victor Plains",
      city: "McKenziehaven",
    },
    company: {
      name: "MindX",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    address: {
      street: "Douglas Extension",
      city: "McKenziehaven",
    },
    company: {
      name: "MindX",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    address: {
      street: "Hoeger Mall",
      city: "South Elvis",
    },
    company: {
      name: "Vingroup",
    },
  },
];


