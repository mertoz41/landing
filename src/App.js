import './App.css';
import FullScreen from './fullScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Waitlist from './components/waitlist'
// import 'semantic-ui-css/semantic.min.css'

function App() {

  return (
    <div className='container'>
      {/* <div className="formbox"> */}
        <h1 className="title">Something cool coming soon...</h1>
      {/* </div> */}
    </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/" render={() => <FullScreen/>}/>
  
    //     <Route exact path="/signup" render={() => <Waitlist/>}/>
          
        
    //   </Switch>
    // </Router>
  );
}

export default App;
