import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import Waves from '../pics/youwaves.jpg'

const What = ({handlePageChange, currentPage}) => {
    return(
        <div className='container'>
            <div className="logobox">
                <h3 className="grayregularfont">
                    Ever since technology allowed anyone to make music with a laptop, existing musicians platforms have geared up for ever-emerging "musicians". 
                    These platforms are not convenient for <span className="coloredfont">instrumentalists</span>, as their talents are indistinguishable behind sound files.
                </h3>
            </div>
            <img src={Waves} alt='omerss' style={{height: 100, justifyContent: 'center', width: '100%'}}/>       
            <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <h3 className="grayregularfont">
                    While popular social networks tackle this problem, such content gets lost in the vastness of these platforms among other things. Music needs its own space.
                </h3>
                    <h3 className="introfont">solution</h3>

            <BsFillCaretDownFill size='3em' className="downbutton"/>

            </div>
        </div>
    )
}

export default What