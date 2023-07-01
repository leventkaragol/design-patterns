import {Dispenser} from "./dispenser";

export class DispenserManager {

    private dispenser: Dispenser;

    constructor() {

        this.dispenser = new Dispenser(100);

        this.dispenser
            .setNext(new Dispenser(50))
            .setNext(new Dispenser(20))
            .setNext(new Dispenser(10))
            .setNext(new Dispenser(5))
            .setNext(new Dispenser(1));
    }

    dispense(amount: number): void {

        this.dispenser.dispense(amount);
    }
}