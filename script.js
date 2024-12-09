const ProjectArr = [];
const TaskArr = [];

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