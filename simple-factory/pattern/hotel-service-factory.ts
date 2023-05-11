import {Room} from "./room";
import {Breakfast} from "./breakfast";
import {Shuttle} from "./shuttle";
import {Dinner} from "./dinner";
import {IHotelService} from "./ihotel-service";

export enum ServiceType {
    Room,
    Breakfast,
    Dinner,
    Shuttle
}

export type vacationInfo = {
    peopleCount: number,
    duration: number,
    hasVip: boolean,
    services: ServiceType[]
};

export class HotelServiceFactory {

    static createService(serviceType: ServiceType, vacationInfo: vacationInfo): IHotelService {

        switch (serviceType) {
            case ServiceType.Room:
                return new Room(vacationInfo.peopleCount, vacationInfo.duration, vacationInfo.hasVip);
            case ServiceType.Breakfast:
                return new Breakfast(vacationInfo.peopleCount, vacationInfo.duration);
            case ServiceType.Dinner:
                return new Dinner(vacationInfo.peopleCount, vacationInfo.duration);
            case ServiceType.Shuttle:
                return new Shuttle(vacationInfo.peopleCount, vacationInfo.hasVip);
            default:
                throw new Error("Geçersiz hizmet tipi");
        }
    }
}