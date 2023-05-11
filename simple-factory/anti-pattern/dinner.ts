export class Dinner {

    constructor(private peopleCount: number, private duration: number) {
    }

    calculatePrice(): number {

        // Akşam yemeğine ait çok kompleks bir fiyatlandırma algoritması
        return (this.peopleCount * this.duration * 5);
    }
}