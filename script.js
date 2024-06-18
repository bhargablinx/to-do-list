const addTaskBtn = document.querySelector("#add-task-btn");
const input = document.querySelector("#add-task");
const allTasks = [];
let taskCount = 0;

addTaskBtn.addEventListener('click', (e) => {
    // get task from user
    const task = input.value;

    // add task to storage
    taskCount++;
    addToStorage(taskCount, task);


    // console.log(task);
    e.preventDefault();
});

function addToStorage(key, value) {
    localStorage.setItem(key, value);
}

