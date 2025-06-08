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
            <input type="checkbox" name="" id="${task.id}" />
            <label for="${task.id}" class="font-semibold">${task.name}</label>
        </div>
        <button class="text-xs bg-red-500 p-1 px-2 rounded-4xl cursor-pointer hover:bg-red-700">delete</button>
    `;
    taskContainer.appendChild(div);
}

function toggleStrickThrough() {
    document.querySelector(".checkbox").addEventListener("click", (e) => {
        if (e.target.checked) {
            e.target.parentElement.childNodes[3].classList.add("line-through");
            console.log("Completed");
        } else {
            e.target.parentElement.childNodes[3].classList.remove(
                "line-through"
            );
        }
    });
}

document.querySelector(".add-task-btn").addEventListener("click", () => {
    taskTaskInput();
});

toggleStrickThrough();
