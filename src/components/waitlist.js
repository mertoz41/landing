import React,{Component} from 'react'
import '../App.css'
import Logo from '../pics/cezslogo.png'
import { withRouter } from "react-router-dom";
import validator from 'validator'
import emailjs from 'emailjs-com'


class Waitlist extends Component{
    constructor(props){
        super(props);
        this.state = {name: '', email: '', about: '', joinedWaitlist: false};
        this.form = React.createRef()
    }
    checkAttempt = e => {
        e.preventDefault()
        if (!this.state.name.length){
            alert('invalid name.')
        } else if (!validator.isEmail(this.state.email)){
            alert('invalid email')
        } else if (!this.state.about.length){
            alert('invalid about')
        } else {
            emailjs.sendForm('service_kxdorjg', 'template_p1l3wiv', this.form.current, 'user_MChuPfMmdUh7yV5A7XgUn')
            this.setState({joinedWaitlist: true})
        }
    }
    render(){
        return(
            <div className="waitlistcontainer">
                <div>
                    <div className='logobox'>
                        <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
                            <img src={Logo} className='waitlistlogo' alt='logo' onClick={() => this.props.history.push('/')}/>
                        </div>
                    </div>
                    {this.state.joinedWaitlist ? 
                        <div className='logobox'>
                        <h3 className="coloredfont">You have joined the waitlist! Expect to hear from us soon!</h3>
                        <div>
                            </div>
                        </div>
                    : 
                    <div>
                        <h1 className="coloredfont">Join waitlist</h1>
                    <form ref={this.form} onSubmit={e => this.checkAttempt(e)} className="formbox">
                        <div>
                            <input type="text" name="name" placeholder="Your name" value={this.state.name} onChange={text=> this.setState({name: text.target.value})}/>
                        </div>
                        <div>
                        <input type="email" name="email" placeholder="Your email" value={this.state.email} onChange={text=> this.setState({email: text.target.value})}/>
                            </div>
                            <div>
                        <textarea name="about" placeholder="Tell us about you" value={this.state.about} onChange={text=> this.setState({about: text.target.value})}/>
                            </div>
                        <input type="submit" value="Join"/>
                    </form>
                    </div>
                    }
                    </div>
                
            </div>
        )
    }
}

export default withRouter(Waitlist)