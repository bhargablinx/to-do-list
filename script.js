let taskArray = [];

const bContainer = document.querySelector('.b-container');
const container = document.querySelector('.container');

loadTaskFromStorage();
updateArray();

function createTask(name, duDate, status) {
    this.name = name;
    this.duDate = duDate;
    this.status = status;
    this.add = function addToArray() {
        taskArray.push(this);
    }
}

// DOM
function app() {
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', (e) => {
        addTask();
        e.preventDefault();
    });
     
}

// ---BREAKDOWN---

// ADDING TASK
function addTask() {
    const input = document.querySelector('.input-field');
    let taskName = input.value;
    let task = new createTask(taskName, 'due date', 'not started');
    task.add();
    pushToStorage();
    showTaskInDOM(taskName);
}

// SHOW ADDED SHOW
function showTaskInDOM(task) {
    const sContainer = document.querySelector('.container');
    const p = document.createElement('p');
    const ck = document.createElement('input');
    ck.type = 'checkbox';
    ck.addEventListener('change', () => {
        if (ck.checked) {
            task.status = 'completed';
            updateArray();
        }
    });
    p.textContent = task.name;
    sContainer.appendChild(p);
    sContainer.appendChild(ck);
}

// STORAGE AREAS
function pushToStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskArray))
}

function loadTaskFromStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        taskArray = storedTasks;
    }
}

// UTILS
function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
}

function updateArray() {
    taskArray = taskArray.filter(element => element.status !== 'completed');
    pushToStorage();
    refreshDOM();
}

// REFRESH DOM
function refreshDOM() {
    container.innerHTML = '';  // Clear the current tasks
    taskArray.forEach((task) => {
        showTaskInDOM(task);
    });
}

// PAGE LOAD: SHOW TASKS FROM LOCAL STORAGE
window.onload = function () {
    loadTaskFromStorage();
    refreshDOM();
}

// let task = new createTask('Wash', '2024-07-15', 'not started');
// task.add();
// task = new createTask('Clean', '2024-07-15', 'not started');
// task.add();
// task = new createTask('Delete Useless Task', '2024-07-15', 'not started');
// task.add();
// pushToStorage()

app();