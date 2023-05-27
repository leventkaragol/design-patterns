import {IWeatherForecastService} from "./iweather-forecast-service";

export class WeatherReportService {

    constructor(private weatherForecastService: IWeatherForecastService) {
    }

    report() {

        const hourlyForecast = this.weatherForecastService.hourlyForecast();
        const dailyForecast = this.weatherForecastService.dailyForecast();
        const weeklyForecast = this.weatherForecastService.weeklyForecast();

        console.log(hourlyForecast);
        console.log(dailyForecast);
        console.log(weeklyForecast);
    }
}