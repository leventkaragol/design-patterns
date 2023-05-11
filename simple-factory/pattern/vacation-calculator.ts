import {HotelServiceFactory, vacationInfo} from "./hotel-service-factory";

export class VacationCalculator {

    public static calculatePrice(vacationInfo: vacationInfo): number {

        let totalPrice: number = 0;

        for (const service of vacationInfo.services) {

            const serviceInstance = HotelServiceFactory.createService(service, vacationInfo);

            totalPrice += serviceInstance.calculatePrice();
        }

        return totalPrice;
    }
}