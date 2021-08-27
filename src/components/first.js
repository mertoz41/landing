import React from 'react'
import '../App.css'
import Logo from '../pics/2021_CEZS-Logo.png'
const FirstPage = () => {
    return(
        <div>
            <div className='logobox'>
                <img src={Logo} className='logo' alt='logo'/>
            </div>
            <div className='logobox'>
                <h1>Music{' '}</h1>
                
                <h1>&nbsp;from</h1>
                <h1>&nbsp;music</h1>
                <h1>ians.</h1>
            </div>
            <p>EXPERIMENTING ONLY</p>
        </div>
    )
}

export default FirstPage