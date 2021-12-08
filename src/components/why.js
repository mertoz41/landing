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
                MUSICIANS PLATFORMS ARE NOT CONVENIENT FOR INSTRUMENTALISTS AND THEYRE ONLY USED BY INDIVIDUALS LOOKING TO MAKE IT.
                SOCIAL MEDIA PLATFORMS ARE TOO VAST
                MUSIC NEEDS ITS OWN SPACE. 
            </h3>
            </div>
            <img src={Waves} alt='omerss' style={{height: 100, justifyContent: 'center', width: '100%'}}/>
            {/* <div className="logobox">

            </div> */}
            
            <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <h3 className="grayregularfont">
                THIS IS WHERE I NEED TO TALK ABOUT WHY CEZS IS NECESSARY AND HOW EXISTING MUSICIANS PLATFORMS ARE NOT CONVENIENT FOR MUSICIANS.
                    Because existing musicians platforms are not convenient for instrumentalists and hobbyists. 
                    While technology has become so advanced that anyone with a computer can make music, it also robbed music of its essence: instruments. 
                    {/* Therefore, today's platforms are all geared to help ever-emerging new "artists" advance their careers in the industry. 
                    While useful for some, instrumentalists are underrepresented in these platforms as their talents are indistinguishable behind sound files, which require some degree of production, overcomplicating sharing music. 
                    Worse, these platforms are only used by aspiring artists alike.  */}
                    </h3>
                
            <BsFillCaretDownFill size='3em' className="downbutton"/>

            </div>
        </div>
    )
}

export default What