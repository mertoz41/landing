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
                {/* <h4>Cezs is a music platform designed for instrumentalists.</h4> */}
                <h3 className="regularfont">Cezs is a social networking service, combined with a music library that is designed for instrumentalists. </h3>
            </div>
            
            <div className="logobox">
                <h5 className="regularfont">Originally designed for musicians, the app allows individuals to display their talents, </h5>
            </div>
        </div>
    )
}

export default What