import React,{Component} from 'react'
import '../App.css'
import Logo from '../pics/2021_CEZS-Logo.png'
import { Form, Grid } from 'semantic-ui-react'


class Waitlist extends Component{
    render(){
        return(
            <div className="container">
                <div className='logobox'>
                    <img src={Logo} className='logo' alt='logo'/>
                </div>
                <div className="logobox">
                    <h1 className="coloredfont">Join Waitlist</h1>
                </div>
                <Grid textAlign='center' verticalAlign='middle' style={{backgroundColor: 'white'}}>
                <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Email' placeholder='name@email.com' />
        </Form.Group>

        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        
        <Form.Button>Submit</Form.Button>
      </Form>
      </Grid>
      
            </div>
        )
    }
}

export default Waitlist