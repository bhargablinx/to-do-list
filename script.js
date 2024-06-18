const addTaskBtn = document.querySelector("#add-task-btn");
const input = document.querySelector("#add-task");
const taskContainer = document.querySelector(".tasks");
const allTask = [];
let num = 0;

addTaskBtn.addEventListener('click', (e) => {
    const task = input.value;
    if (task === "")
        console.log("Empty task not allowed!");
    else {
        allTask.push(task);
    }
    e.preventDefault();
});

window.addEventListener('beforeunload', () => {
    num++
    localStorage.setItem(num, allTask);
});

// function showTaskInApp(name) {
//     const div = document.createElement("div");
//     div.className = "row";
//     taskContainer.appendChild(div);
//     const checkBox = document.createElement("input");
//     checkBox.type = 'checkbox';
//     div.appendChild(checkBox);
//     const taskName = document.createElement("span");
//     taskName.textContent = name;
//     div.appendChild(taskName);
// }