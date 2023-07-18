import "./App.css";
import PrivacyPage from "./components/privacypage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import React from "react";
import Help from "./components/Help";
import First from "./components/first";
// import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cezs Music</title>
        <meta name="description" content="Nested component" />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <First />} />
          <Route exact path="/privacy" render={() => <PrivacyPage />} />
          <Route exact path="/help" render={() => <Help />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
