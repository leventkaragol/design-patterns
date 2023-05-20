import {Task} from "./task";

export class Project {
    public tasks: Task[] = [];

    constructor(public projectName: string) {
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    clone(): Project {
        let newProject = new Project(this.projectName);

        this.tasks.forEach(task => newProject.addTask(task.clone()));

        return newProject;
    }
}