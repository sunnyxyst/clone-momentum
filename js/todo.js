const toDoWrap = document.getElementById("todo-form");
const toDoInput = document.getElementById("todo-input");
const toDoList = document.getElementById("todo-list");

const TODO_LIST = "toDos";
let toDos = [];

function deleteToDo(e) {
    const btn = e.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODO_LIST, JSON.stringify(toDos));
}

function addToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId,
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    addToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedtoDos = localStorage.getItem(TODO_LIST);
    if(toDos !== null) {
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo) {
            addToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoWrap.addEventListener("submit", handleSubmit);
}

init();