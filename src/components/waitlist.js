import React,{useState, useRef} from 'react'
import '../App.css'
import Logo from '../pics/cezslogo.png'
import { withRouter } from "react-router-dom";
import validator from 'validator'
import emailjs from 'emailjs-com'
import {animated, useSpring} from 'react-spring'

const Waitlist = ({history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const [joinedWaitlist, setJoinedWaitlist] = useState(false)
    const form = useRef(null)
    const animation = useSpring({to: {opacity: 1}, from: {opacity: 0}})


    const checkAttempt = e => {
        e.preventDefault()
        if (!name.length){
            alert('invalid name.')
        } else if (!validator.isEmail(email)){
            alert('invalid email')
        } else if (!about.length){
            alert('invalid about')
        } else {
            emailjs.sendForm('service_kxdorjg', 'template_p1l3wiv', form.current, 'user_MChuPfMmdUh7yV5A7XgUn')
            setJoinedWaitlist(true)
        }
    }
        return(
            <animated.div style={animation}>
                <div className="waitlistcontainer">
                    <div className='logobox'>
                        <div>
                            <img src={Logo} className='logo' alt='logo' onClick={() => history.push('/')}/>

                        </div>
                    </div>
                    {joinedWaitlist ? 
                        <div className='logobox'>
                        <h3 className="coloredfont">You have joined the waitlist! Expect to hear from us soon!</h3>
                        <div>
                            </div>
                        </div>
                    : 
                    <div>
                        <h1 className="coloredfont">Join waitlist</h1>
                        <form ref={form} onSubmit={e => checkAttempt(e)} className="formbox">
                            <div>
                                <input type="text" name="name" placeholder="Your name" value={name} onChange={e=> setName(e.target.value)}/>
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Your email" value={email} onChange={e=> setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <textarea name="about" placeholder="Tell us about you" value={about} onChange={e=> setAbout(e.target.value)}/>
                            </div>
                            <input type="submit" value="Join"/>
                        </form>
                    </div>
                    }
                
            </div>
        </animated.div>
        )
    }


export default withRouter(Waitlist)