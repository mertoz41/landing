import React from 'react'
import { withRouter } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// const history = useNavigate()
const Last = ({history}) => {
    // console.log(history)
    // const history = useNavigate()
    return(
        <div className="container">
            <div className="logobox">
                <h4 className="regularfont">If you are interested in joining our community, join the <span className="linkword" onClick={() => history.push('/waitlist')}>waitlist</span>!</h4>
            </div>
        </div>
    )
}

export default withRouter(Last)