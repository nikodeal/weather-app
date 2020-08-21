import React, { createContext, useState } from 'react'

export const StateContext = createContext()

const StateContextP = (props) => {

    const [state, setState] = useState({
        favorites: [],
        allData: { cityDets: null, weather: null, forecast: null }
    });

    const [getText, setGetText] = useState('Tel Aviv');


    return (
        <StateContext.Provider value={{ state, setState, getText, setGetText }}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateContextP
