import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from '../pics/cezslogo.png'
import First from '../pics/first.gif'
const What = ({handlePageChange, currentPage}) => {
    return(
        <div className="secondcontainer">

            <div className='sections'>
                <div className="sectionside">
                    <div className="formbox">
                        
                        <h3 className="regularfont">
                            <img src={Logo} alt='logo' className="cezswriting"/>
                            is a social network wrapped around a library of your favorite songs, played by <span className="coloredfont">instrumentalists</span>.
                        </h3>

                        <h3 className="regularfont">
                            Designed for <span className="coloredfont">instrumentalists</span>, <img src={Logo} alt='logo' className="cezswriting"/>
                            provides an exclusive network where users express themselves through music, discover others with similar taste, and pinpoint upcoming events.

                        </h3>
                    </div>
                </div>
                <div className="sectionside">
                    <img src={First} alt='omerss' className='gif' />
                </div>
        
            </div>

            <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <BsFillCaretDownFill size='3em' className="downbutton"/>
            </div>
            
        </div>
    )
}

export default What