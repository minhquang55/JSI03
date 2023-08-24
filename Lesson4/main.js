let todoList = [
  {
    id: 1,
    title: "Lam bai tap ve nha JSI03",
    completed: false,
  },
  {
    id: 2,
    title: "Lam bai tap toan tren lop",
    completed: false,
  },
  {
    id: 3,
    title: "Rua bat",
    completed: false,
  },
  {
    id: 4,
    title: "Quet nha",
    completed: true,
  },
  {
    id: 5,
    title: "Lau nha",
    completed: false,
  },
];

const todoListElm = document.getElementById("todoList");
const inputTodoElm = document.getElementById("inputTodo");
const addBtn = document.getElementById("add-btn");

const handleDeleteTodo = (deleteId) => {
  const deleteIndex = todoList.findIndex((todo) => todo.id === deleteId);
  todoList.splice(deleteIndex, 1);
  renderTodoList();
  saveLocalStorage();
}

const handleChangeStatus = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  todoList[index].completed = !todoList[index].completed;
  saveLocalStorage();
}

const renderTodoList = () => {
  todoListElm.innerHTML = "";
  todoList.forEach((todo) => {
    const todoElm = document.createElement("div");
    todoElm.classList.add("todo");
  
    const inputElm = document.createElement("input");
    inputElm.setAttribute("type", "checkbox");
    inputElm.checked = todo.completed;
    inputElm.addEventListener('change', () => handleChangeStatus(todo.id));
  
    const spanElm = document.createElement("span");
    spanElm.textContent = todo.title;
  
    const iconElm = document.createElement("i");
    iconElm.classList.add("bi", "bi-trash3-fill");
    iconElm.addEventListener('click', () => handleDeleteTodo(todo.id));
  
    todoElm.appendChild(inputElm);
    todoElm.appendChild(spanElm);
    todoElm.appendChild(iconElm);
    todoListElm.appendChild(todoElm);
  });
}

const handleAddTodo = () => {
  if (inputTodoElm.value === '') {
    alert('ban can phai nhap gi do');
  } else {
    todoList.push({
      id: Math.floor(Math.random() * 10000),
      title: inputTodoElm.value,
      completed: false,
    })
    renderTodoList();
    inputTodoElm.value = "";
    saveLocalStorage();
  } 
}

const saveLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

const getLocalStorage = () => {
  const todoListLocal = JSON.parse(localStorage.getItem('todos'));
  if(todoListLocal) {
    todoList = todoListLocal;
  }
  renderTodoList();
}

addBtn.addEventListener('click', handleAddTodo);

getLocalStorage();
