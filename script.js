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

projPopBtn.addEventListener("click", () => {
    console.log("Add project popup");
    projectPopUp.style.display = "block";
})

document.querySelector(".clear-entries-btn").addEventListener("click", () => {
    projectPopUp.style.display = "none";
})