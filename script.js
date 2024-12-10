let ProjectArr = [];
let TaskArr = [];

if (pullFromDB(0) != null) ProjectArr = pullFromDB(0);
if (pullFromDB(1) != null) TaskArr = pullFromDB(1);
DOM()

const projPopBtn = document.querySelector(".project-popup-btn");
const taskPopBtn = document.querySelector(".task-popup-btn");
const projectPopUp = document.querySelector(".project-popup");
const taskPopUp = document.querySelector(".task-popup");

class Projects {
    constructor(name, dueDate, archive) {
        this.name = name;
        this.dueDate = dueDate;
        this.archive = archive;
    }

    addingToArray() {
        ProjectArr.push(this);
    }
}

class Task {
    constructor(tName, tDueDate, project, status) {
        this.tName = tName;
        this.tDueDate = tDueDate;
        this.project = project;
        this.status = status;
    }

    addingToArray() {
        TaskArr.push(this);
    }
}

function pushToDB(data, position) {
    const dataModified = JSON.stringify(data);
    localStorage.setItem(position, dataModified);
}

function pullFromDB(position) {
    const response = localStorage.getItem(position);
    const responseModi = JSON.parse(response);
    return responseModi;
}

function clearEntries() {
    document.querySelector(".proj-name").value = "";
    document.querySelector(".proj-due").value = "";
}

function clearTaskEntries() {
    document.querySelector(".task-name").value = "";
    document.querySelector(".task-due").value = "";
    document.querySelector(".proj-field-container").value = "";
}

function toggleDisableBtn(btn) {
    if (btn.disabled == true) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function showProjectsInProjectField() {
    const projectContainer = document.querySelector(".proj-field-container");
    projectContainer.innerHTML = "";     // Clear existing options (optional, if needed)
    const defaultOption = document.createElement("option");
    defaultOption.className = "def-opt"
    defaultOption.textContent = "Select Project";
    defaultOption.value = "undefined"
    defaultOption.disabled = true;
    defaultOption.selected = true;
    projectContainer.appendChild(defaultOption)
    for (item of ProjectArr) {
        const name = item.name;
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        projectContainer.appendChild(option);
    }
}

function DOM() {
    const main = document.querySelector(".main");
    main.innerHTML = "";

    for (item of ProjectArr) {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        const projectNavCont = document.createElement("div");
        projectNavCont.className = "project-nav-container";

        const projTittle = document.createElement("div");
        projTittle.className = "title";
        projTittle.textContent = item.name;

        const projDue = document.createElement("div");
        projDue.className = "due";
        projDue.textContent = item.dueDate;

        projectNavCont.appendChild(projTittle);
        projectNavCont.appendChild(projDue);
        projectCard.appendChild(projectNavCont);
        main.appendChild(projectCard);

        for (itm of TaskArr) {
            if (itm.project == item.name) {
                const taskCont = document.createElement("div");
                taskCont.className = "task-container";

                const field = document.createElement("div");
                field.className = "field";

                const name = document.createElement("div");
                name.className = "name";
                name.textContent = itm.tName;

                const check = document.createElement("input");
                check.type = "checkbox";
                check.className = "task-check";
                check.addEventListener("change", () => handleTaskCheck(check));

                const tasDue = document.createElement("div");
                tasDue.className = "tas-due";
                tasDue.textContent = itm.tDueDate;

                field.appendChild(name);
                field.appendChild(check);
                field.appendChild(tasDue);

                taskCont.appendChild(field);
                projectCard.appendChild(taskCont);
            }
        }
    }
}


projPopBtn.addEventListener("click", () => {
    projectPopUp.style.display = "block";
    toggleDisableBtn(taskPopBtn);
})

taskPopBtn.addEventListener("click", () => {
    taskPopUp.style.display = "block";
    toggleDisableBtn(projPopBtn);
    showProjectsInProjectField();
})

document.querySelector(".clear-entries-btn").addEventListener("click", () => {
    clearEntries();
    projectPopUp.style.display = "none";
    toggleDisableBtn(taskPopBtn)
})

document.querySelector(".add-project-btn").addEventListener("click", () => {
    const pName = document.querySelector(".proj-name").value;
    const pDue = document.querySelector(".proj-due").value;
    const archive = false; // default value of archive
    let proj = new Projects(pName, pDue, archive);
    ProjectArr.push(proj);
    pushToDB(ProjectArr, 0);
    clearEntries();
    projectPopUp.style.display = "none";
    toggleDisableBtn(taskPopBtn);
    DOM()
})

document.querySelector(".clear-task-entries-btn").addEventListener("click", () => {
    clearTaskEntries();
    taskPopUp.style.display = "none";
    toggleDisableBtn(projPopBtn)
})

document.querySelector(".add-task-btn").addEventListener("click", () => {
    const tName = document.querySelector(".task-name").value;
    const tDue = document.querySelector(".task-due").value;
    const tProject = document.querySelector(".proj-field-container").value;
    const status = false;
    let task = new Task(tName, tDue, tProject, status);
    TaskArr.push(task);
    pushToDB(TaskArr, 1);
    taskPopUp.style.display = "none";
    clearTaskEntries();
    toggleDisableBtn(projPopBtn);
    DOM()
})

function handleTaskCheck(item) {
    console.log("Pop");
    const parentNode = item.parentElement;
    const taskNameToDelete = parentNode.children[0].textContent; // Get task name
    deleteTaskFromArray(taskNameToDelete); // Remove from array
    parentNode.remove(); // Remove element from DOM
}


function deleteTaskFromArray(taskName) {
    // Iterate through the TaskArr to find and remove the task
    for (let i = 0; i < TaskArr.length; i++) {
        if (TaskArr[i].tName === taskName) {
            TaskArr.splice(i, 1); // Remove the task at index i
            break; // Stop after removing the first match
        }
    }
    pushToDB(TaskArr, 1)
}