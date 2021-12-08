import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";

const How = ({currentPage, handlePageChange}) => {
    return(
        <div className="container">
            <div className="logobox">
                <h1>How is Cezs?</h1>
            </div>
            <p>
               


                YWhile Cezs simplifies sharing music, video content delivers more authenticity from musicians. 
                More importantly, Cezs brings a new way of listening and discovering music through covers by opening its doors to everyone to listen to their favorite songs from Cezs musicians.</p>
                <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <BsFillCaretDownFill size='3em' className="downbutton"/>
            </div>
        </div>
    )
}

export default How