import request from 'request';

class WeatherAPI {
  constructor() {
    this.weatherUrl = {
      url: ' http://apis.skplanetx.com/weather/current/hourly?lon=&village=도곡동&county=강남구&lat=&city=서울&version=1',
      headers: {
        'appKey': 'c51c3220-82fb-3201-b6ff-c97fa9c4c4df'
      }
    };
  };

  getWeather () {
    request.get(this.weatherUrl).on('response', (response) => {
      console.log(response);
    })
  }
}

export default (new WeatherAPI);
