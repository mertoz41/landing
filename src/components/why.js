import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";

const What = ({handlePageChange, currentPage}) => {
    return(
        <div className='container'>
            <div className="logobox">
                <h1>Why Cezs?</h1>
            </div>
            <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
            <BsFillCaretDownFill size='3em' className="downbutton"/>

            </div>
        </div>
    )
}

export default What