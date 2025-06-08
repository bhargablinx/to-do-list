const allTasks = [];

function createTask(taskName) {
    const task = {
        name: taskName,
        isCompleted: false,
        id: crypto.randomUUID(),
    };

    allTasks.push(task);
}

function taskTaskInput() {
    const taskName = document.querySelector(".task-inputbox").value;
    createTask(taskName);
    document.querySelector(".task-inputbox").value = "";
}

document.querySelector(".add-task-btn").addEventListener("click", () => {
    taskTaskInput();
});
