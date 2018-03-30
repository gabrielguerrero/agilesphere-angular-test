import { Weather } from '../../services/weather-api';
import { CityWeather } from '../../models/weather';

export const weatherApiResponseMock: Weather = {
  cod: '200',
  message: 0.0032,
  cnt: 36,
  list: [
    {
      dt: 1487246400,
      main: {
        temp: 286.67,
        temp_min: 281.556,
        temp_max: 286.67,
        pressure: 972.73,
        sea_level: 1046.46,
        grnd_level: 972.73,
        humidity: 75,
        temp_kf: 5.11
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.81,
        deg: 247.501
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2017-02-16 12:00:00'
    },
    {
      dt: 1487257200,
      main: {
        temp: 285.66,
        temp_min: 281.821,
        temp_max: 285.66,
        pressure: 970.91,
        sea_level: 1044.32,
        grnd_level: 970.91,
        humidity: 70,
        temp_kf: 3.84
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.59,
        deg: 290.501
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2017-02-16 15:00:00'
    },
    {
      dt: 1487268000,
      main: {
        temp: 277.05,
        temp_min: 274.498,
        temp_max: 277.05,
        pressure: 970.44,
        sea_level: 1044.7,
        grnd_level: 970.44,
        humidity: 90,
        temp_kf: 2.56
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.41,
        deg: 263.5
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2017-02-16 18:00:00'
    },
    {
      dt: 1487278800,
      main: {
        temp: 272.78,
        temp_min: 271.503,
        temp_max: 272.78,
        pressure: 969.32,
        sea_level: 1044.14,
        grnd_level: 969.32,
        humidity: 80,
        temp_kf: 1.28
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.24,
        deg: 205.502
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2017-02-16 21:00:00'
    },
    {
      dt: 1487289600,
      main: {
        temp: 273.341,
        temp_min: 273.341,
        temp_max: 273.341,
        pressure: 968.14,
        sea_level: 1042.96,
        grnd_level: 968.14,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 76
      },
      wind: {
        speed: 3.59,
        deg: 224.003
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2017-02-17 00:00:00'
    },
    {
      dt: 1487300400,
      main: {
        temp: 275.568,
        temp_min: 275.568,
        temp_max: 275.568,
        pressure: 966.6,
        sea_level: 1041.39,
        grnd_level: 966.6,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 76
      },
      wind: {
        speed: 3.77,
        deg: 237.002
      },
      rain: {
        '3h': 0.32
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2017-02-17 03:00:00'
    },
    {
      dt: 1487311200,
      main: {
        temp: 276.478,
        temp_min: 276.478,
        temp_max: 276.478,
        pressure: 966.45,
        sea_level: 1041.21,
        grnd_level: 966.45,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 3.81,
        deg: 268.005
      },
      rain: {
        '3h': 4.9
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2017-02-17 06:00:00'
    },
    {
      dt: 1487322000,
      main: {
        temp: 276.67,
        temp_min: 276.67,
        temp_max: 276.67,
        pressure: 967.41,
        sea_level: 1041.95,
        grnd_level: 967.41,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 64
      },
      wind: {
        speed: 2.6,
        deg: 266.504
      },
      rain: {
        '3h': 1.37
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2017-02-17 09:00:00'
    }
  ],
  city: {
    id: 6940463,
    name: 'Caracas',
    coord: {
      lat: 48.137,
      lon: 11.5752
    },
    country: 'none'
  }
};

export const cityWeatherMock: CityWeather = {
  city: 'Caracas',
  forecast: [
    { date: '2017-02-16 12:00:00', temperature: 286.67 },
    { date: '2017-02-16 18:00:00', temperature: 277.05 },
    { date: '2017-02-17 00:00:00', temperature: 273.341 },
    { date: '2017-02-17 06:00:00', temperature: 276.478 }
  ]
};
