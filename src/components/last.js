import React from 'react'
import { withRouter } from "react-router-dom";
import Logo from '../pics/cezslogo.png'

const Last = ({history}) => {

    return(
        <div className="container">

            <div className='logobox'>
                <div style={{marginTop: 20}}>
                    <img className="logo" src={Logo} alt="logo"/>
                </div>
            </div>

            <div className="logobox">
                <div>
                    <h1 className="title">Let's make <span className='coloredfont'>instruments</span> cool again!</h1>
                </div>
            </div>

            <div className='logobox'>
                <h2 className="title">If you are interested in joining our community, join the <span className="linkword" onClick={() => history.push('/waitlist')}>waitlist</span>.</h2>
            </div>
        
            <div className='logobox'>
                <div>
                    <h5 className='coloredfont'>Registered trademark. All Rights reserved.</h5>
                    <h5 className='coloredfont' onClick={() => history.push('/privacy')}>Privacy Policy</h5>

                </div>
            </div>
            
        </div>
    )
}

export default withRouter(Last)