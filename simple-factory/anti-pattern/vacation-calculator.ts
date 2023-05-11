import {Room} from "./room";
import {Breakfast} from "./breakfast";
import {Shuttle} from "./shuttle";
import {Dinner} from "./dinner";

export class VacationCalculator {

    public static calculatePrice(peopleCount: number, duration: number, hasVip: boolean, hasBreakfast: boolean, hasShuttle: boolean, hasDinner: boolean): number {

        let totalPrice: number = 0;

        const room: Room = new Room(peopleCount, duration, hasVip);

        totalPrice += room.calculatePrice();

        if (hasBreakfast) {

            const breakfast: Breakfast = new Breakfast(peopleCount, duration);

            totalPrice += breakfast.calculatePrice();
        }

        if (hasDinner) {

            const dinner: Dinner = new Dinner(peopleCount, duration);

            totalPrice += dinner.calculatePrice();
        }

        if (hasShuttle) {

            const shuttle: Shuttle = new Shuttle(peopleCount, hasVip);

            totalPrice += shuttle.calculatePrice();
        }

        return totalPrice;
    }
}