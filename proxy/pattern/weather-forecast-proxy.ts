import {IWeatherForecastService} from "./iweather-forecast-service";
import {WeatherForecastService} from "./weather-forecast-service";

export class WeatherForecastProxy implements IWeatherForecastService {

    private lastDailyForecast: string = '';
    private lastDailyForecastTime: number = 0;
    private dailyForecastCacheDuration: number = 1 * 60 * 60 * 1000; // 1 saat

    private lastWeeklyForecast: string = '';
    private lastWeeklyForecastTime: number = 0;
    private weeklyForecastCacheDuration: number = 6 * 60 * 60 * 1000; // 6 saat

    constructor(private weatherForecastService: WeatherForecastService) {
    }

    hourlyForecast() {
        return this.weatherForecastService.hourlyForecast();
    }

    dailyForecast() {

        const currentTime = Date.now();

        if (currentTime - this.lastDailyForecastTime > this.dailyForecastCacheDuration) {
            this.lastDailyForecastTime = currentTime;
            this.lastDailyForecast = this.weatherForecastService.dailyForecast();
        }

        return this.lastDailyForecast;
    }

    weeklyForecast() {

        const currentTime = Date.now();

        if (currentTime - this.lastWeeklyForecastTime > this.weeklyForecastCacheDuration) {
            this.lastWeeklyForecastTime = currentTime;
            this.lastWeeklyForecast = this.weatherForecastService.weeklyForecast();
        }

        return this.lastWeeklyForecast;
    }
}