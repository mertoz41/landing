import React from 'react'
import '../App.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import Waves from '../pics/youwaves.jpg'

const What = ({handlePageChange, currentPage}) => {
    return(
        <div className='container'>
            {/* <div style={{marginBottom: 10}}>

            </div> */}
            <div className="logobox">
                <h3 className="grayregularfont">
                    Since technology allowed anyone to make music with a laptop, existing platforms are geared to supply such ever-emerging musicians. 
                    These platforms are not convenient for <span className="coloredfont">instrumentalists</span>, as their talents are indistinguishable from binaries behind sound files.
                {/* While existing musicians platforms require production to share music file, and  */}
                {/* sound file
                how its only used by individuals looking to make money */}
            </h3>
            </div>
            <img src={Waves} alt='omerss' style={{height: 100, justifyContent: 'center', width: '100%'}}/>
            {/* <div className="logobox">

            </div> */}
            
            <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <h3 className="grayregularfont">
                    While popular social networks tackle this problem, such content goes unnoticed in the vastness of these platforms among other things. Music needs its own space.
                </h3>
                    <h3 className="introfont">solution</h3>

            <BsFillCaretDownFill size='3em' className="downbutton"/>

            </div>
        </div>
    )
}

export default What