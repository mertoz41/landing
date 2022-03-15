import React from 'react'
import '../App.css'
import Logo from '../pics/cezslogo.png'
import { withRouter } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import {animated, useSpring} from 'react-spring'


const FirstPage = ({history, handlePageChange, currentPage}) => {
    const animation = useSpring({to: {opacity: 1}, from: {opacity: 0}})

    return(
        <animated.div style={animation}>
            <div className='container'>  

                <div className='logobox'>
                    <div>
                        <img src={Logo} className='logo' alt='logo'/>
                        <h1 className="coloredfont">Music platform for instrumentalists.</h1>
                        <h2 className="title">Coming soon...</h2>
                    </div>
                </div>

                {/* <div className="buttonbox">
                    <h3 onClick={() => history.push('/waitlist')} className='waitlistButton'>Join Waitlist</h3>
                </div>

                <div className="buttonbox">
                    <div className='nextpage' onClick={() => handlePageChange(currentPage + 1)}>
                        <h4 className="introfont">Click the arrows or swipe down to learn more.</h4>
                        <BsFillCaretDownFill size='3em' className="downbutton"/>
                    </div>
                </div> */}
        
        </div>
        </animated.div>
    )
}

export default withRouter(FirstPage)