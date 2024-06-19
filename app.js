const container = document.querySelector(".container")
const addTaskBtn = document.querySelector("#add-task-btn");
const input = document.querySelector("#add-task");
let taskContainer = document.querySelector(".tasks");
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
    const dtnBtn = document.createElement("button")
    dtnBtn.textContent = "Delete"
    dtnBtn.className = "delete"
    div.appendChild(dtnBtn);
}

function updateDOM() {
    for (let i = 0; i < allRetrieveTask.length; i++) {
        showTaskInApp(allRetrieveTask[i]);
    }
    console.log("DOM Updated");
}

function clearDOM() {
    taskContainer.remove()
    taskContainer = document.createElement('div');
    taskContainer.className = "tasks"
    container.appendChild(taskContainer);
    console.log("Task Container Cleared");
}

updateDOM();

const deleteBtn = document.querySelectorAll(".delete");

deleteBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        let task = element.parentNode.childNodes[1].textContent;;
        let index = parseInt(allTask.indexOf(task));
        removeElementFromArray(index);
        allTaskJson = JSON.stringify(allTask);
        localStorage.setItem('task', allTaskJson);
        location.reload();
    });
});

function removeElementFromArray(index) {
    if (index > -1) { // only splice array when item is found
        allRetrieveTask.splice(index, 1); // 2nd parameter means remove one item only
        console.log("Task deleted");
    }
}