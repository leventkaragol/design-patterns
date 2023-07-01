export class Dispenser {

    constructor(private banknoteValue: number) {
    }

    dispense(quantity: number): void {

        // Para kasasına sinyal gönderiliyor
        console.log(`Banknot: ${this.banknoteValue}, Adet: ${quantity}`);
    }
}