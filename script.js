let taskArray = [];

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
function showTaskInDOM(taskName) {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.textContent = taskName;
    body.appendChild(div);
}

// STORAGE AREAS
function pushToStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskArray))
}

function loadTaskFromStorage() {
    taskArray = JSON.parse(localStorage.getItem('tasks'));
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
    taskArray.forEach((element) => {
        if (element.status === 'completed') {
            removeItemOnce(taskArray, element);
        }
    });
    pushToStorage();
}

// ONE PAGE LOAD & SHOW TASKS FROM Local Storage
if (taskArray[0] != undefined) {
    window.onload = function () {
        const body = document.querySelector('body')
        loadTaskFromStorage()
        taskArray.forEach((item) => {
            const div = document.createElement('div');
            div.textContent = item.name;
            body.appendChild(div);
        });  
    }
}

// let task = new createTask('Wash', '2024-07-15', 'not started');
// task.add();
// task = new createTask('Clean', '2024-07-15', 'not started');
// task.add();
// task = new createTask('Delete Useless Task', '2024-07-15', 'not started');
// task.add();
// pushToStorage()

app();