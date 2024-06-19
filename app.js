const addTaskBtn = document.querySelector("#add-task-btn");
const input = document.querySelector("#add-task");
const taskContainer = document.querySelector(".tasks");
let allTask = [];
let allTaskJson = [];
let allRetrieveTask = [];

if (localStorage.length != 0) {
    retrieveTask();
    allTask = allRetrieveTask;
}

addTaskBtn.addEventListener('click', (e) => {
    let task = input.value;
    allTask.push(task);
    showTaskInApp(task);
    allTaskJson = JSON.stringify(allTask);
    localStorage.setItem('task', allTaskJson);
    e.preventDefault();
});

function retrieveTask() {
    allRetrieveTask = localStorage.getItem('task');
    allRetrieveTask = JSON.parse(allRetrieveTask);
}

function showTaskInApp(name) {
    const div = document.createElement("div");
    div.className = "row";
    taskContainer.appendChild(div);
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    div.appendChild(checkBox);
    const taskName = document.createElement("span");
    taskName.textContent = name;
    div.appendChild(taskName);
}

function updateDOM() {
    for (i = 0; i < allRetrieveTask.length; i++) {
        showTaskInApp(allRetrieveTask[i]);
    }
}

updateDOM();