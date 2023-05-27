import {WeatherForecastService} from "./weather-forecast-service";

export class WeatherReportService {

    private lastDailyForecast: string = '';
    private lastDailyForecastTime: number = 0;
    private dailyForecastCacheDuration: number = 1 * 60 * 60 * 1000; // 1 saat

    private lastWeeklyForecast: string = '';
    private lastWeeklyForecastTime: number = 0;
    private weeklyForecastCacheDuration: number = 6 * 60 * 60 * 1000; // 6 saat

    report() {

        const weatherForecastService = new WeatherForecastService();

        // Her durumda güncel saatlik tahmin alınır
        const hourlyForecast = weatherForecastService.hourlyForecast();

        console.log(hourlyForecast);

        const currentTime = Date.now();

        // Eğer son günlük tahmin alınalı 1 saatten fazla zaman geçmişse yeniden tahmin alınır
        if (currentTime - this.lastDailyForecastTime > this.dailyForecastCacheDuration) {
            this.lastDailyForecastTime = currentTime;
            this.lastDailyForecast = weatherForecastService.dailyForecast();
        }

        console.log(this.lastDailyForecast);

        // Eğer son haftalık tahmin alınalı 6 saatten fazla zaman geçmişse yeniden tahmin alınır
        if (currentTime - this.lastWeeklyForecastTime > this.weeklyForecastCacheDuration) {
            this.lastWeeklyForecastTime = currentTime;
            this.lastWeeklyForecast = weatherForecastService.weeklyForecast();
        }

        console.log(this.lastWeeklyForecast);
    }
}