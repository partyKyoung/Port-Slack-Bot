import WeatherAPI from '../api/WeatherAPI';

export default function botWeather (message, rtm) {
  const channel = message.channel;
  const text = message.text;
  const user = message.user;

  if (text.includes('현재')) {
    WeatherAPI.getWeather();
    rtm.sendMessage('준비중...', channel);
  }
} // if
