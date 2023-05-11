import {VacationCalculator} from "./vacation-calculator";
import {ServiceType} from "./hotel-service-factory";

const totalPrice = VacationCalculator.calculatePrice({
    peopleCount: 4,
    duration: 3,
    hasVip: true,
    services: [ServiceType.Room, ServiceType.Breakfast, ServiceType.Dinner, ServiceType.Shuttle]
});

console.log("Toplam Ücret: ", totalPrice);