import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from '../pics/cezslogo.png'
import Second from '../pics/secondjawnt.gif'
const How = ({currentPage, handlePageChange}) => {
    return(
        <div className="secondcontainer">
            <div className="sections">
                <div className="sectionside">
                    <div className="formbox">
                    <h3 className="regularfont">
                <img src={Logo} alt='logo' className="cezswriting"/>
                simplifies sharing music with video content, which delivers more authenticity from <span className='coloredfont'>instrumentalists</span>, while introducing a new way to listen to <span className="coloredfont">music</span> and connect with others.

                </h3>
               
                    </div>
                </div>
                <div className="sectionside">
                    <img src={Second} alt='discover' className='gif'/>

                </div>
            </div>
           
            
                <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <BsFillCaretDownFill size='3em' className="downbutton"/>
            </div>
        </div>
    )
}

export default How