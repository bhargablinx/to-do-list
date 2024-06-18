const addTaskBtn = document.querySelector("#add-task-btn");
const input = document.querySelector("#add-task");
const taskContainer = document.querySelector(".tasks");
let taskCount = localStorage.length;

// add all the task from the local storage after the page is loaded
for (i = 1; i <= taskCount; i++) {
    let task = localStorage.getItem(i);
    if (task == null) {
        continue;
    }
    else
        showTaskInApp(task);
}

addTaskBtn.addEventListener('click', (e) => {
    const task = input.value; // get task from user
    taskCount++;
    localStorage.setItem(taskCount, task);  // add task to storage
    showTaskInApp(task)
    e.preventDefault();
});

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