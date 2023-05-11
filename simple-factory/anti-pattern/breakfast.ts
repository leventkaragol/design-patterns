export class Breakfast {

    constructor(private peopleCount: number, private duration: number) {
    }

    calculatePrice(): number {

        // Kahvaltıya ait çok kompleks bir fiyatlandırma algoritması
        return (this.peopleCount * this.duration * 3);
    }
}