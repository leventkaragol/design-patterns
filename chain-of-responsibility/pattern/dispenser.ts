import {IDispenser} from "./idispenser";

export class Dispenser implements IDispenser {
    private nextDispenser?: IDispenser;
    private noteValue: number;

    constructor(noteValue: number) {
        this.noteValue = noteValue;
    }

    setNext(dispenser: IDispenser): IDispenser {
        this.nextDispenser = dispenser;
        return dispenser;
    }

    dispense(amount: number): number {

        if (amount >= this.noteValue) {

            // Belirtilen tutar bu kasa için uygun, adet hesaplanıyor
            const quantity = Math.floor(amount / this.noteValue);
            const remainingAmount = amount % this.noteValue;

            // Para kasasına sinyal gönderiliyor
            console.log(`Banknot: ${this.noteValue}, Adet: ${quantity}`);

            // Kalan tutar için işlem zincirde bir sonraki birime yönlendiriliyor
            return this.nextDispenser ? this.nextDispenser.dispense(remainingAmount) : remainingAmount;

        } else {

            // Belirtilen tutar için uygun banknot yok, işlem zincirde bir sonraki birime yönlendiriliyor
            return this.nextDispenser ? this.nextDispenser.dispense(amount) : amount;
        }
    }
}