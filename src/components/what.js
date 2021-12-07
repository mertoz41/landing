import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";

const What = ({handlePageChange, currentPage}) => {
    return(
        <div className="container">
            <div>
                <div className="logobox">
                    <h1 className="regularfont">What is</h1>
                    <h1 className="coloredfont">&nbsp;Cezs</h1>
                    <h1 className="regularfont">?</h1>
                </div>
                <div className="logobox">
                    {/* <h4>Cezs is a music platform designed for instrumentalists.</h4> */}
                    <h3 className="regularfont">Social network where users make up the music library with instrument videos.</h3>
                </div>
                
                <div className="logobox">
                    <h5 className="regularfont">Originally designed for musicians, the app allows individuals to display their talents, </h5>
                </div>
            </div>
            <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
            <BsFillCaretDownFill size='3em' className="downbutton"/>

            </div>
        </div>
    )
}

export default What