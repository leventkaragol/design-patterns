export class Dispenser {
    private noteValue: number;

    constructor(noteValue: number) {
        this.noteValue = noteValue;
    }

    dispense(quantity: number): void {

        // Para kasasına sinyal gönderiliyor
        console.log(`Banknot: ${this.noteValue}, Adet: ${quantity}`);
    }
}