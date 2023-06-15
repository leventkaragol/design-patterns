export class Employee {
    constructor(public parentId: number, private salary: number) {}

    getSalary(): number {
        return this.salary;
    }
}