export class Shuttle {

    constructor(private peopleCount: number, private hasVip: boolean) {
    }

    calculatePrice(): number {

        // Servis hizmetine ait çok kompleks bir fiyatlandırma algoritması
        return (this.peopleCount * 8) * (this.hasVip ? 0.5 : 0);
    }
}