import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from '../pics/cezslogo.png'
import OmerSs from '../pics/IMG_6485.PNG'
import First from '../pics/omersong.gif'
const What = ({handlePageChange, currentPage}) => {
    return(
        <div className="secondcontainer">
            <div className='sections'>
                <div className="sectionside">
                    <div className="formbox">
                        
                        <h3 className="regularfont">
                            <img src={Logo} alt='logo' className="cezswriting"/>
                            is a social network where users make up the library with instrument videos, pinpoint upcoming events, and connect with others through music.
                        </h3>
                        <h3 className="regularfont">
                        WHILE COVER VIDEOS APPEAR IN RESPECTIVE SONG, ALBUM, AND ARTIST PAGES, ORIGINAL CONTENT IS DISCOVERED BY INSTRUMENT, GENRE, OR LOCATION.

                        </h3>
                        <h3 className="regularfont">
                        DISCOVER SECTION ALLOWS USERS TO DISCOVER MUSICIANS ON THE MAP, PINPOINT UPCOMING GIGS OR AUDITIONS. 

                        </h3>
                    </div>
                </div>
                <div className="sectionside">
                    <img src={First} alt='omerss' style={{height: 600, justifyContent: 'center'}}/>
                </div>
        
            </div>
            <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <BsFillCaretDownFill size='3em' className="downbutton"/>
            </div>
        </div>
    )
}

export default What