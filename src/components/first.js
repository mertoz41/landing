import React from 'react'
import '../App.css'
import Logo from '../pics/cezslogo.png'
import { withRouter } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";

const FirstPage = ({history, handlePageChange, currentPage}) => {
    return(
        <div className='container'>
            <div className='logobox'>
                    <div style={{marginTop: 20}}>
                        <img src={Logo} className='logo' alt='logo'/>

                    </div>
                </div>
                <div className="logobox">
                    <div>
                        <h1 className="title"><span className='coloredfont'>Music</span> platform for <span className='coloredfont'>instrumentalists</span>.</h1>
                        <h2 className="title">Coming soon...</h2>
                    </div>
                </div>
                        <div className="buttonbox">
                <div className="waitlistbutton" onClick={() => history.push('/waitlist')}>
                    <h3>Join Waitlist</h3>
                </div>
                
    

            </div>

                
            <div className="buttonbox">

                <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                <h4 className="introfont">Click the arrows or swipe down to learn more.</h4>
                    <BsFillCaretDownFill size='3em' className="downbutton"/>

                </div>
                </div>
        
        </div>
    )
}

export default withRouter(FirstPage)