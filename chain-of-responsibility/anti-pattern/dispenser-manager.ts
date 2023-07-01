import {Dispenser} from "./dispenser";

export class DispenserManager {

    private dispenser100: Dispenser;
    private dispenser50: Dispenser;
    private dispenser20: Dispenser;
    private dispenser10: Dispenser;
    private dispenser5: Dispenser;
    private dispenser1: Dispenser;

    constructor() {

        this.dispenser100 = new Dispenser(100);
        this.dispenser50 = new Dispenser(50);
        this.dispenser20 = new Dispenser(20);
        this.dispenser10 = new Dispenser(10);
        this.dispenser5 = new Dispenser(5);
        this.dispenser1 = new Dispenser(1);
    }

    dispense(amount: number): void {

        let remainingAmount = amount;

        // Tutar için gerekli 100'lük banknot sayısı bulunuyor
        const dispenser100Quantity = Math.floor(amount / 100);

        if (dispenser100Quantity > 0) {

            this.dispenser100.dispense(dispenser100Quantity);

            remainingAmount -= dispenser100Quantity * 100;
        }

        // Kalan tutar için gerekli 50'lik banknot sayısı bulunuyor
        const dispenser50Quantity = Math.floor(remainingAmount / 50);

        if (dispenser50Quantity > 0) {

            this.dispenser50.dispense(dispenser50Quantity);

            remainingAmount -= dispenser50Quantity * 50;
        }

        // Kalan tutar için gerekli 20'lik banknot sayısı bulunuyor
        const dispenser20Quantity = Math.floor(remainingAmount / 20);

        if (dispenser20Quantity > 0) {

            this.dispenser20.dispense(dispenser20Quantity);

            remainingAmount -= dispenser20Quantity * 20;
        }

        // Kalan tutar için gerekli 10'luk banknot sayısı bulunuyor
        const dispenser10Quantity = Math.floor(remainingAmount / 10);

        if (dispenser10Quantity > 0) {

            this.dispenser10.dispense(dispenser10Quantity);

            remainingAmount -= dispenser10Quantity * 10;
        }

        // Kalan tutar için gerekli 5'lik banknot sayısı bulunuyor
        const dispenser5Quantity = Math.floor(remainingAmount / 5);

        if (dispenser5Quantity > 0) {

            this.dispenser5.dispense(dispenser5Quantity);

            remainingAmount -= dispenser5Quantity * 5;
        }

        // Kalan tutar için gerekli 1'lik banknot sayısı bulunuyor
        const dispenser1Quantity = remainingAmount;

        if (dispenser1Quantity > 0) {

            this.dispenser1.dispense(dispenser1Quantity);
        }
    }
}