import React from 'react'
import { withRouter } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// const history = useNavigate()
const Last = ({history}) => {
    // console.log(history)
    // const history = useNavigate()
    return(
        <div>
            <h4>EXPERIMENTING THAT WAITLIST BUTTON</h4>
            <button onClick={() => history.push('/signup')}>to waitlist</button>
        </div>
    )
}

export default withRouter(Last)