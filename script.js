const ProjectArr = [];
const TaskArr = [];

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

function pushToDB(data) {
    const dataModified = JSON.stringify(data);
    localStorage.setItem(0, dataModified);
}

function pullFromDB() {
    const response = localStorage.getItem(0);
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
    // main
    const main = document.querySelector(".main");
    main.innerHTML = "";

    for (item of ProjectArr) {
        const projectCard = document.createElement("div");
        // Project card
        projectCard.className = "project-card";
        const projectNavCont = document.createElement("div");
        // Project Navbar
        projectNavCont.className = "project-nav-container";
        const projTittle = document.createElement("div");
        projTittle.className = "title";
        projTittle.textContent = item.name;
        const projDue = document.createElement("div");
        projDue.className = "due";
        projDue.textContent = item.dueDate;

        for (itm of TaskArr) {
            if (itm.project == item.name) {
                // Task Container
                const taskCont = document.createElement("div");
                taskCont.className = "task-container";
                // Field
                const field = document.createElement("div");
                field.className = "field";
                const name = document.createElement("div");
                name.className = "name";
                name.textContent = itm.tName;
                const check = document.createElement("input")
                check.type = "checkbox";
                const tasDue = document.createElement("div");
                tasDue.className = "tas-due";
                tasDue.textContent = itm.tDueDate;
                field.appendChild(name);
                field.appendChild(check);
                field.appendChild(tasDue);
                taskCont.appendChild(field);
                projectNavCont.appendChild(projTittle);
                projectNavCont.appendChild(projDue);
                projectCard.appendChild(projectNavCont);
                projectCard.appendChild(taskCont);
                main.appendChild(projectCard)
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
    clearEntries();
    projectPopUp.style.display = "none";
    toggleDisableBtn(taskPopBtn);
    console.log(ProjectArr);

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
    taskPopUp.style.display = "none";
    clearTaskEntries();
    toggleDisableBtn(projPopBtn);
})