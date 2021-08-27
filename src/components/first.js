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
                
                <h1>&nbsp;from</h1>
                <h1 className="coloredfont">&nbsp;music</h1>
                <h1>ians.</h1>
            </div>
            <div className="logobox">
                <button onClick={() => history.push('/signup')}>Join Waitlist</button>
            </div>
            <div className="logobox">
                <h4>Swipe down to learn more</h4>
                
            </div>
        </div>
    )
}

export default withRouter(FirstPage)