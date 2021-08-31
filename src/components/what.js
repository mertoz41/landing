import React from 'react'
import '../App.css'
const What = ({handlePageChange}) => {
    return(
        <div className="container">
            <div className="logobox">
                <h1 className="regularfont">What is</h1>
                <h1 className="coloredfont">&nbsp;Cezs</h1>
                <h1 className="regularfont">?</h1>
            </div>
            <div className="logobox">
                <h4 className="regularfont">Cezs is a music platform designed for instrumentalists to share their talents .</h4>
            </div>
            
            <div className="logobox">
                <h5 className="regularfont">Originally designed for musicians, the app allows individuals to display their talents, </h5>
            </div>
        </div>
    )
}

export default What