export class Weather {
    
    constructor(city, countryCode) {
        this.apikey = 'ddbb4f5fccbea1e4f659f1fc9c339b89';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = response.json();
        return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
} 