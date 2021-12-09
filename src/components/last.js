import React from 'react'
import { withRouter } from "react-router-dom";
import Logo from '../pics/cezslogo.png'
// import { useNavigate } from "react-router-dom";
// const history = useNavigate()
const Last = ({history}) => {
    // console.log(history)
    // const history = useNavigate()
    return(
        <div className="container">
            <div>
            </div>

            <div className="formbox">
                <h4 className="lastFont">Let's make <span className='coloredfont'>instruments</span> cool again!</h4>
                <h5 className="lastsmallfont">If you are interested in joining our community, join the <span className="linkword" onClick={() => history.push('/waitlist')}>waitlist</span>.</h5>
            </div>
        
            <div className='footer'>
                
                    <div style={{flexDirection: 'row', display: 'flex'}}>
                        <img className="footerlogo" src={Logo} alt="logo"/>
                        <h5 style={{alignSelf: 'center'}}>is a Registered trademark. All Rights reserved.</h5>
                    </div>
                    <div>
                        <h5 style={{textAlign: 'right'}} onClick={() => history.push('/privacy')}>Privacy Policy</h5>
                    </div>

            </div>
        </div>
    )
}

export default withRouter(Last)