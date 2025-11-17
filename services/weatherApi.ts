export async function fetchWeather(query: string, key: string) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}&days=7&aqi=no`;

  const res = await fetch(url);
  return await res.json();
}
