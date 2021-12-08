import './App.css';
import FullScreen from './fullScreen';
import PrivacyPage from './components/privacypage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Waitlist from './components/waitlist'
import { Helmet } from 'react-helmet'
import {ReactMic} from 'react-mic'
import React, {useState, useRef, useEffect} from 'react'
// import 'semantic-ui-css/semantic.min.css'
// import Stop from './pics/you.mp3'
// import WaveSurfer from 'wavesurfer.js';

function App() {
  const [recording, setRecording] = useState(false)
  const wavey = useRef(null)
  // useEffect(() => {
  //   let wavesurf = WaveSurfer.create({
  //     container: '#waveform',
  //     waveColor: 'darkgray',
  //     progressColor: '#9370DB'
  // })
  //   wavey.current = wavesurf
  //   wavey.current.load(Stop)
  // },[])
  const recordSound = () => {
    setRecording(!recording)
  }
  return (
    <div className='container'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Cezs Music</title>
          <meta name="description" content="Nested component" />
          <link rel='icon' type='image/png' href='favicon.ico' sizes="16x16" />
        </Helmet>
        {/* <div id="waveform" style={{marginTop: 150}}>
          <div style={{position: 'absolute', top: 150}}>

          </div>
        </div> */}
        {/* <ReactMic
                record={recording}
                className="sound-wave"
                // onStop={this.onStop}
                // onData={this.onData}
                strokeColor="#9370DB"
                backgroundColor= "#2e2e2e"/> */}

                {/* <div onClick={() => recordSound()}>
                  <h1>RECORD</h1>
                </div> */}
       <Router>
       <Switch>
         <Route exact path="/" render={() => <FullScreen/>}/>
  
         <Route exact path="/waitlist" render={() => <Waitlist/>}/>
          <Route exact path='/privacy' render={() => <PrivacyPage/>} />
        
       </Switch>
     </Router>
    </div>
    
  );
}

export default App;
