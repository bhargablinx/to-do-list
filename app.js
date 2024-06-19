const addTaskBtn = document.querySelector("#add-task-btn");
const input = document.querySelector("#add-task");
let allTask = [];
let allTaskJson = [];

addTaskBtn.addEventListener('click', (e) => {
    let task = input.value;
    allTask.push(task);
    allTaskJson = JSON.stringify(allTask);
    localStorage.setItem('task', allTaskJson);
    e.preventDefault();
});
