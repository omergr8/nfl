import logo from "./logo.svg";
import Home from "./Pages/Home/Home";
import Draft from "./Pages/Draft/Draft";
import Scoreboard from "./Pages/Scoreboard/Scoreboard";
import Standings from "./Pages/Standings/Standings";
import Schedule from "./Pages/Schedule/Schedule";
import PrimaryNavbar from "./Pages/Common/PrimaryNavbar/PrimaryNavbar";
import ScorecardBar from "./Pages/Common/ScorecardBar/ScorecardBar";
import Footer from "./Pages/Common/Footer/Footer";
import field from "./Assets/field.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="overLay">
        <div className="field">
          <div className="App">
            <Router>
              <PrimaryNavbar />
              <div className="scoreContainer">
                <ScorecardBar />
              </div>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/draft" component={Draft} />
                <>
                  <Route path="/scoreboard" component={Scoreboard} />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/standings" component={Standings} />
                </>
              </Switch>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
