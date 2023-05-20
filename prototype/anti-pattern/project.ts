import {Task} from "./task";

export class Project {
    public tasks: Task[] = [];

    constructor(public projectName: string) {
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }
}