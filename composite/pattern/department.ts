import {Component} from "./component";

export class Department extends Component {
    private children: Component[] = [];

    add(component: Component): void {
        this.children.push(component);
    }

    getSalary(): number {
        return this.children.reduce((sum, child) => sum + child.getSalary(), 0);
    }
}