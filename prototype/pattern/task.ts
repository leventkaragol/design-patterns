import {Resource} from "./resource";

export class Task {
    public resources: Resource[] = [];

    constructor(public taskName: string, public startDate: Date, public endDate: Date) {

    }

    addResource(resource: Resource) {
        this.resources.push(resource);
    }

    clone(): Task {
        let newTask = new Task(this.taskName, this.startDate, this.endDate);

        this.resources.forEach(resource => newTask.addResource(resource.clone()));

        return newTask;
    }
}