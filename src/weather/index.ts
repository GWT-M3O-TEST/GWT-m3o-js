import * as m3o from "@m3o/m3o-node";

export class WeatherService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the weather forecast for the next 1-10 days
  forecast(request: ForecastRequest): Promise<ForecastResponse> {
    return this.client.call(
      "weather",
      "Forecast",
      request
    ) as Promise<ForecastResponse>;
  }
  // Get the current weather report for a location by postcode, city, zip code, ip address
  now(request: NowRequest): Promise<NowResponse> {
    return this.client.call("weather", "Now", request) as Promise<NowResponse>;
  }
}

export interface Forecast {
  // max temp in fahrenheit
  max_temp_f?: number;
  // max wind speed mph
  max_wind_mph?: number;
  // minimum temp in fahrenheit
  min_temp_f?: number;
  // will it rain
  will_it_rain?: boolean;
  // the average temp in celsius
  avg_temp_c?: number;
  // chance of rain (percentage)
  chance_of_rain?: number;
  // max temp in celsius
  max_temp_c?: number;
  // minimum temp in celsius
  min_temp_c?: number;
  // time of sunrise
  sunrise?: string;
  // time of sunset
  sunset?: string;
  // the average temp in fahrenheit
  avg_temp_f?: number;
  // forecast condition
  condition?: string;
  // max wind speed kph
  max_wind_kph?: number;
  // date of the forecast
  date?: string;
  // the URL of forecast condition icon. Simply prefix with either http or https to use it
  icon_url?: string;
}

export interface ForecastRequest {
  // number of days. default 1, max 10
  days?: number;
  // location of the forecase
  location?: string;
}

export interface ForecastResponse {
  // forecast for the next number of days
  forecast?: Forecast[];
  // e.g 37.55
  latitude?: number;
  // the local time
  local_time?: string;
  // location of the request
  location?: string;
  // e.g -77.46
  longitude?: number;
  // region related to the location
  region?: string;
  // timezone of the location
  timezone?: string;
  // country of the request
  country?: string;
}

export interface NowRequest {
  // location to get weather e.g postcode, city
  location?: string;
}

export interface NowResponse {
  // the humidity percentage
  humidity?: number;
  // the local time
  local_time?: string;
  // e.g -77.46
  longitude?: number;
  // temperature in fahrenheit
  temp_f?: number;
  // the weather condition
  condition?: string;
  // country of the request
  country?: string;
  // whether its daytime
  daytime?: boolean;
  // feels like in fahrenheit
  feels_like_f?: number;
  // wind in mph
  wind_mph?: number;
  // temperature in celsius
  temp_c?: number;
  // timezone of the location
  timezone?: string;
  // wind in kph
  wind_kph?: number;
  // cloud cover percentage
  cloud?: number;
  // feels like in celsius
  feels_like_c?: number;
  // the URL of the related icon. Simply prefix with either http or https to use it
  icon_url?: string;
  // region related to the location
  region?: string;
  // e.g 37.55
  latitude?: number;
  // wind degree
  wind_degree?: number;
  // location of the request
  location?: string;
  // wind direction
  wind_direction?: string;
}
