import {WeatherReportService} from "./weather-report-service";
import {WeatherForecastProxy} from "./weather-forecast-proxy";
import {WeatherForecastService} from "./weather-forecast-service";

const weatherReportService = new WeatherReportService(new WeatherForecastProxy(new WeatherForecastService()));

weatherReportService.report();

console.log();

setTimeout(() => {
    weatherReportService.report();
}, 5000);