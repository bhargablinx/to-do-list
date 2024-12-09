const ProjectArr = [];
const TaskArr = [];

const projPopBtn = document.querySelector(".project-popup-btn");
const taskPopBtn = document.querySelector(".task-popup-btn");
const projectPopUp = document.querySelector(".project-popup");
const taskPopUp = document.querySelector(".task-popup");

class Projects {
    constructor (name, dueDate, archive) {
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

function getProjectNames() {
    for (item of ProjectArr) {
        console.log(item.name);
    }
}

function toggleDisableBtn(btn) {
    if (btn.disabled == true) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }    
}

projPopBtn.addEventListener("click", () => {
    projectPopUp.style.display = "block";
    toggleDisableBtn(taskPopBtn);
})

taskPopBtn.addEventListener("click", () => {
    taskPopUp.style.display = "block";
    toggleDisableBtn(projPopBtn);
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
    projectPopUp.style.display = "none";
    clearEntries();  
})

document.querySelector(".clear-task-entries-btn").addEventListener("click", () => {
    clearEntries();
    taskPopUp.style.display = "none";
    toggleDisableBtn(projPopBtn)
})

document.querySelector(".add-task-btn").addEventListener("click", () => {
      
})