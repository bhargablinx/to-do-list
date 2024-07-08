let taskArray = [];

const bContainer = document.querySelector('.b-container');
const container = document.querySelector('.container');

loadTaskFromStorage();
updateArray();

class Task {
    constructor(name, duDate, status) {
        this.name = name;
        this.duDate = duDate;
        this.status = status;
    }

    addToArray() {
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

// ADDING TASK
function addTask() {
    const input = document.querySelector('.input-field');
    let taskName = input.value;
    input.value ='';
    let task = new Task(taskName, 'due date', 'not started');
    task.addToArray();
    pushToStorage();
    showTaskInDOM(task);
}

// SHOW ADDED TASK
function showTaskInDOM(task) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const p = document.createElement('p');
    p.textContent = task.name;

    const ck = document.createElement('input');
    ck.type = 'checkbox';
    ck.addEventListener('change', () => {
        if (ck.checked) {
            task.status = 'completed';
            updateArray();
        }
    });

    taskItem.appendChild(p);
    taskItem.appendChild(ck);
    container.appendChild(taskItem);
}

// STORAGE HANDLING
function pushToStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function loadTaskFromStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        taskArray = storedTasks;
    }
}

// UTILS
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

// Initialize the app
app();
