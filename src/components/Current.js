import React, { useEffect, useContext } from "react";
import { StateContext } from "../context/StateContextP";
import '../style/Current.css'


const Current = () => {

  const { state, setState } = useContext(StateContext)

  const { allData } = state

  useEffect(() => {

    return () => {

    }
  }, [state.favorites])
  const { cityDets, weather } = allData

  const trashLogo = <svg
    width="1.5em"
    height="1.5em"
    viewBox="0 0 16 16"
    className="bi bi-trash"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
    <path
      fillRule="evenodd"
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    />
  </svg>

  const favIcon = <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-cloud-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
    <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
  </svg>

  return (
    <div>
      <div className='weather-details' style={{ textAlign: 'center' }}>
        <h3>{cityDets.LocalizedName}</h3>
        <h5>{weather.WeatherText}</h5>
        <h1>{weather.Temperature.Metric.Value} &deg;C</h1>
        <span style={{ border: 'none', outline: 'none' }} onClick={() => {
          let temp = [...state.favorites, allData]
          setState({
            ...state,
            favorites: temp
          })

        }}>{favIcon}</span>

      </div>
      <p id='hidden'>CLICK THE CLOUD TO ADD TO FAVORITES</p>
    </div>
  );
};

export default Current;
