const addTaskBtn = document.querySelector("#add-task-btn");
const input = document.querySelector("#add-task");
const taskContainer = document.querySelector(".tasks");
let taskCount = parseInt(localStorage.key(""));
if (NaN) {
    taskCount = 0;
}


addTaskBtn.addEventListener('click', (e) => {
    const task = input.value; // get task from user
    taskCount++;
    addToStorage(taskCount, task); // add task to storage
    showTaskInApp(task)
    e.preventDefault();
});

function addToStorage(key, value) {
    localStorage.setItem(key, value);
    console.log("Database updated");
}

function showTaskInApp(name) {
    const div = document.createElement("div");
    div.className = "row";
    taskContainer.appendChild(div);
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    div.appendChild(checkBox);
    const taskName = document.createElement("span");
    taskName.textContent = localStorage.getItem(taskCount);
    div.appendChild(taskName);
}