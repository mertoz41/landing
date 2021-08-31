import React from 'react'
import '../App.css'
import Logo from '../pics/2021_CEZS-Logo.png'
import { withRouter } from "react-router-dom";
const FirstPage = ({history, handlePageChange}) => {
    return(
        <div className='container'>
            <div className='logobox'>
                <img src={Logo} className='logo' alt='logo'/>
            </div>
            <div className='logobox'>
                <h1 className='coloredfont'>Music{' '}</h1>
                
                <h1 className='regularfont'>&nbsp;from</h1>
                <h1 className="coloredfont">&nbsp;music</h1>
                <h1 className="regularfont">ians.</h1>
            </div>
            <div className="logobox">
                <div className="waitlistbutton" onClick={() => history.push('/signup')}>
                    <h4>Join Waitlist</h4>
                </div>

            </div>
            <div className="logobox">
                <h4 className="regularfont">Swipe down to learn more.</h4>
                
            </div>
        </div>
    )
}

export default withRouter(FirstPage)