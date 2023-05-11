import {IHotelService} from "./ihotel-service";

export class Room implements IHotelService {

    constructor(private peopleCount: number, private duration: number, private hasVip: boolean) {
    }

    calculatePrice(): number {

        // Odaya ait çok kompleks bir fiyatlandırma algoritması
        return (this.peopleCount * this.duration * 10) * (this.hasVip ? 0.8 : 0);
    }
}