import {WeatherReportService} from "./weather-report-service";

const weatherReportService = new WeatherReportService();

weatherReportService.report();

setTimeout(() => {
    weatherReportService.report();
}, 5000);