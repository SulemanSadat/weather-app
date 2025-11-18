import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { View } from "react-native";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import DailyForecastList from "../components/DailyForecastList";
import GradientBackground from "../components/GradientBackground";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import { fetchWeather } from "../services/weatherApi";


export default function Index() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setError] = useState("");

  const API_KEY = "230d10e6b1d54ef5bf3162012251711";

  async function loadWeather(query: string) {
    try {
      setLoading(true);
      const weather = await fetchWeather(query, API_KEY);

      if (weather.error) {
        setError(weather.error.message);
        setLoading(false);
        return;
      }

      setData(weather);
      setError("");
    } catch {
      setError("Network error");
    }
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Location permission denied");
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      loadWeather(`${loc.coords.latitude},${loc.coords.longitude}`);
    })();
  }, []);

  if (loading) return <Loading />;
  if (errorMsg) return <ErrorMessage message={errorMsg} />;

  return (
   <GradientBackground condition={data.current.condition.text}>
  
  <Header onRefresh={() => loadWeather(data.location.name)} />

  <SearchBar onSearch={(v) => loadWeather(v)} />

  <WeatherCard
    city={data.location.name}
    temp={data.current.temp_c}
    desc={data.current.condition.text}
    icon={`https:${data.current.condition.icon}`}
  />



  <View style={{ marginTop: 20 }}>
    <DailyForecastList data={data.forecast.forecastday} />
  </View>

</GradientBackground>
  );
}
