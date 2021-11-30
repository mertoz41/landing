import './App.css';
import FullScreen from './fullScreen';
import PrivacyPage from './components/privacypage';
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
      
       <Router>
       <Switch>
         <Route exact path="/" render={() => <FullScreen/>}/>
  
         <Route exact path="/signup" render={() => <Waitlist/>}/>
          <Route exact path='/privacy' render={() => <PrivacyPage/>} />
        
       </Switch>
     </Router>
    </div>
    
  );
}

export default App;
