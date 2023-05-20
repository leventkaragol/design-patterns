import {Resource} from "./resource";

export class Task {
    public resources: Resource[] = [];

    constructor(public taskName: string, public startDate: Date, public endDate: Date) {

    }

    addResource(resource: Resource) {
        this.resources.push(resource);
    }
}