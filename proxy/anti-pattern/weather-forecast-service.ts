export class WeatherForecastService {
    hourlyForecast() {

        return `Saatlik hava tahmini, ${new Date()}`;
    }

    dailyForecast() {

        return `Günlük hava tahmini, ${new Date()}`;
    }

    weeklyForecast() {

        return `Haftalık hava tahmini, ${new Date()}`;
    }
}