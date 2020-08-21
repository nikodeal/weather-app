import React, { useEffect, useContext } from "react";
import SearchBox from "./SearchBox";
import Current from "./Current";
import FiveDayForecast from "./FiveDayForecast";
import { StateContext } from "../context/StateContextP";


const Forecast = () => {

  const { state, setState, getText, setGetText } = useContext(StateContext)

  const { allData} = state


  const API_KEY = "DnFQtfvwVHYUwNaGSYwtQ1nCsqtDMUfF";

  const getCity = async (cityName) => {
    const base = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`;
    const query = `?apikey=${API_KEY}&q=${cityName}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
  };
  const getWeather = async (locationKey) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const query = `${locationKey}?apikey=${API_KEY}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
  };

  const getForecast = async (locationKey) => {
    const base = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`;
    const query = `${locationKey}?apikey=${API_KEY}&metric=true`
    const response = await fetch(base + query);
    const data = await response.json();

    return data
  }

  const updateCity = async (getText) => {
    const cityDets = await getCity(getText)
    const weather = await getWeather(cityDets.Key)
    const forecast = await getForecast(cityDets.Key)

    return { cityDets, weather, forecast };
  }

  useEffect(() => {
    updateCity(getText)
      .then(data => {
        setState({
          ...state,
          allData: {
            cityDets: data.cityDets,
            weather: data.weather,
            forecast: data.forecast.DailyForecasts
          }
        })
      })
      .catch(err => console.log(err))

  }, [getText])

  return (
    <div>
      <SearchBox getText={getText} setGetText={setGetText} />
      {allData.cityDets && allData.weather && allData.forecast && <Current state={state} setState={setState} allData={allData} />}
      {allData.forecast ? <FiveDayForecast allData={allData} /> : <p style={{ textAlign: `center` }}>loading...</p>}
    </div >
  );
};

export default Forecast;
