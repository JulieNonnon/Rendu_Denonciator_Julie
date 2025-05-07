export enum Weather {
    Sunny = '☀️',
    Rainy = '🌧️',
    Snowy = '❄️',
    Windy = '🌬️'
  }
  

export function getWeatherAdvice(weather: Weather): string {
    switch (weather) {
      case Weather.Sunny:
        return "Porte des lunettes de soleil 😎";
      case Weather.Rainy:
        return "Prends un parapluie ☔";
      case Weather.Snowy:
        return "Mets un manteau chaud 🧥";
      case Weather.Windy:
        return "Attention aux bourrasques 💨";
      default:
        return "Météo non connue";
    }
  }
  