import {Component} from "./component";

export class Employee extends Component {
    constructor(private salary: number) {
        super();
    }

    getSalary(): number {
        return this.salary;
    }
}