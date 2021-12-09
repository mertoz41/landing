import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from '../pics/cezslogo.png'
import OmerSs from '../pics/IMG_6485.PNG'
import First from '../pics/goodv.gif'
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
                        {/* <h3 className="regularfont">
                            Listen to your favorite songs from our talented musicians, or discover 
                        </h3> */}
                        {/* <h3 className="regularfont">
                        Discover section allows users to pinpoint their upcoming gigs or auditions on the map. 

                        </h3> */}
                    </div>
                </div>
                <div className="sectionside">
                    <img src={First} alt='omerss' style={{height: 600, justifyContent: 'center'}}/>
                </div>
        
            </div>
            <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <h3 className="introfont">problem</h3>
                <BsFillCaretDownFill size='3em' className="downbutton"/>
            </div>
        </div>
    )
}

export default What