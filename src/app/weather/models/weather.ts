export interface WeatherForDay {
  date: string;
  temperature: number;
}

export interface  CityWeather {
  city: string;
  forecast:  WeatherForDay[];
}
