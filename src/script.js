const allTasks = [];

function createTask(taskName) {
    const task = {
        name: taskName,
        isCompleted: false,
        id: crypto.randomUUID(),
    };

    allTasks.push(task);
    renderTask(task);
}

function taskTaskInput() {
    const taskName = document.querySelector(".task-inputbox").value;
    createTask(taskName);
    document.querySelector(".task-inputbox").value = "";
}

function renderTask(task) {
    const taskContainer = document.querySelector(".task-container");
    const div = document.createElement("div");
    div.className =
        "flex items-center justify-between border border-slate-800 rounded-lg p-2 my-3";
    div.innerHTML = `
        <div class="flex items-center gap-3">
            <input type="checkbox" name="" id="uniqueId" />
            <label for="uniqueId" class="font-semibold">${task.name}</label>
        </div>
        <button class="text-xs bg-red-500 p-1 px-2 rounded-4xl cursor-pointer hover:bg-red-700">delete</button>
    `;
    taskContainer.appendChild(div);
}

document.querySelector(".add-task-btn").addEventListener("click", () => {
    taskTaskInput();
});
