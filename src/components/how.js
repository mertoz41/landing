import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from '../pics/cezslogo.png'

const How = ({currentPage, handlePageChange}) => {
    return(
        <div className="secondcontainer">
            <div className="sections">
                <div className="sectionside">
                    <div className="formbox">
                    <h3 className="regularfont">
                <img src={Logo} alt='logo' className="cezswriting"/>
                    simplifies sharing music with video content, while providing an exclusive platform for <span className="coloredfont">anyone</span> to express themselves through music, and pinpoint upcoming events on the map.

                     {/* which delivers more authenticity. */}
                </h3>
                {/* <h3 className="regularfont"> */}
                    {/* aside in the library, discover section allows users to pinpoint upcoming  */}
                {/* Cezs facilitates a new way to listen to music through covers and opening its doors to everyone to listen to their favorite songs from Cezs musicians and discover events. */}
                    {/* </h3> */}
                    </div>
                </div>
                <div className="sectionside">

                </div>
            </div>
            {/* <div className="logobox">
                <h1>How is Cezs?</h1>
            </div> */}
            
                <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <BsFillCaretDownFill size='3em' className="downbutton"/>
            </div>
        </div>
    )
}

export default How