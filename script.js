const addTaskBtn = document.querySelector("#add-task-btn");
const input = document.querySelector("#add-task");
const taskContainer = document.querySelector(".tasks");
const allTask = [];
updateDOM();

addTaskBtn.addEventListener('click', (e) => {
    const task = input.value;
    if (task === "") {
        alert("Empty task not allowed!");
    }
    else {
        allTask.push(task);
        showTaskInApp(task);
    }
    e.preventDefault();
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem(1, allTask);
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

function updateDOM() {
    for (i = 0; i < allTask.length; i++) {
        let tmp = Array.from(localStorage.getItem(1))
        let task = tmp[i];
        showTaskInApp(task);
    }
}