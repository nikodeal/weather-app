import React from 'react'
import '../style/FiveDayForecast.css'


const FiveDayForecast = (props) => {
   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
   return (
      <div style={{
         display: 'flex',
         flexDirection: 'row',
         flexWrap: `wrap`,
         justifyContent: 'center'
      }}
         className='fivedays' >


         {props.allData.forecast.map((day, i) => {
            let d = new Date(day.Date)
            let n = d.getDay()

            let datePartOne = day.Date.slice(5, 7)
            let datePartTwo = day.Date.slice(8, 10)

            const fixDate = `${datePartTwo}/${datePartOne}`

            return <div key={i} style={{ width: '4rem', margin: 'auto' }}>

               <h2>{daysOfWeek[n]}</h2>
               <h6>{fixDate}</h6>
               <h6>Min {day.Temperature.Minimum.Value}&deg;C  Max {day.Temperature.Maximum.Value}&deg;C </h6>

            </div>
         })}

      </div>
   )
}

export default FiveDayForecast
