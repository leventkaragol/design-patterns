import {WeatherReportService} from "./weather-report-service";

const weatherReportService = new WeatherReportService();

weatherReportService.report();

console.log();

setTimeout(() => {
    weatherReportService.report();
}, 5000);