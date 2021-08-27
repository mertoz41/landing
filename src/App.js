import './App.css';
import FullScreen from './fullScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Waitlist from './components/waitlist'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <FullScreen/>}/>
  
        <Route exact path="/signup" render={() => <Waitlist/>}/>
          
        
      </Switch>
    </Router>
  );
}

export default App;
