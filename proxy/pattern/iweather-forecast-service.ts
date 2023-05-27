export interface IWeatherForecastService {
    hourlyForecast(): string;

    dailyForecast(): string;

    weeklyForecast(): string;
}