import React, { useState, useContext } from 'react'
import { StateContext } from '../context/StateContextP'
import '../style/SearchBox.css'

const SearchBox = () => {

    const { setGetText, getText } = useContext(StateContext)

    return (
        <div className='Home'>

            <hr />
            <form style={{ textAlign: `center` }} >
                <input className='search' style={
                    {
                        borderRadius: `14px`,
                        fontSize: `1.3rem`,
                        padding: `5px`,
                        outline: `none`
                    }}
                    type='text' placeholder='Search for a city...' value={getText} onChange={(e) => { setGetText(e.target.value) }}
                />
            </form>


        </div>
    )
}

export default SearchBox
