import logo from "./logo.svg";
import Login from "./Pages/Registration/Login/Login";
import Signup from "./Pages/Registration/Signup/Signup";
import Home from "./Pages/Home/Home";
import Home2 from "./Pages/Home2/Home2";
import Draft from "./Pages/Draft/Draft";
import Scoreboard from "./Pages/Scoreboard/Scoreboard";
import Standings from "./Pages/Standings/Standings";
import Schedule from "./Pages/Schedule/Schedule";
import SearchPlayer from "./Pages/SearchPlayer/SearchPlayer";
import PrimaryNavbar from "./Pages/Common/PrimaryNavbar/PrimaryNavbar";
import ScorecardBar from "./Pages/Common/ScorecardBar/ScorecardBar";
import Stats from "./Pages/Stats/Stats";
import Teams from "./Pages/Teams/Pages/Home/Teams";
import ScheduleTeam from "./Pages/Teams/Pages/Schedule/Schedule";
import RosterTeam from "./Pages/Teams/Pages/Roster/Roster";
import DepthChart from "./Pages/Teams/Pages/DepthChart/DepthChart";
import TeamInjuries from "./Pages/Teams/Pages/Injuries/Injuries";
import TeamStat from "./Pages/Teams/Pages/Stats/Stats";
import Injuries from "./Pages/Injuries/Injuries";
import Articles from "./Pages/Articles/Articles";
import ArticleLayout from "./Pages/ArticleLayout/ArticleLayout";
import Footer from "./Pages/Common/Footer/Footer";
import field from "./Assets/field.png";
import { Switch, Route, useLocation } from "react-router-dom";
import React from "react";
import "./App.css";
import Transactions from "./Pages/Transactions/Transactions";

function App() {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location);
  }, []);
  return (
    <React.Fragment>
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      ) : (
        <div
          className={
            location.pathname === "/home2"
              ? "overLay2"
              : location.pathname === "/article-layout" ||
                location.pathname === "/articles"
              ? "overLay3"
              : "overLay"
          }
        >
          <div className="field">
            <div className="App">
              <Switch>
                <>
                  <PrimaryNavbar />
                  <div className="scoreContainer">
                    <ScorecardBar />
                  </div>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/home2" component={Home2} />
                  <Route exact path="/draft" component={Draft} />
                  <>
                    <Route path="/scoreboard" component={Scoreboard} />
                    <Route path="/schedule" component={Schedule} />
                    <Route path="/standings" component={Standings} />
                    <Route path="/search-player" component={SearchPlayer} />
                    <Route path="/stats" component={Stats} />
                    <Route exact path="/teams" component={Teams} />
                    <Route
                      exact
                      path="/teams/schedule"
                      component={ScheduleTeam}
                    />
                    <Route exact path="/teams/roster" component={RosterTeam} />
                    <Route
                      exact
                      path="/teams/depth-chart"
                      component={DepthChart}
                    />
                    <Route
                      exact
                      path="/teams/injuries"
                      component={TeamInjuries}
                    />
                    <Route exact path="/teams/stats" component={TeamStat} />
                    <Route exact path="/injuries" component={Injuries} />
                    <Route
                      exact
                      path="/transactions"
                      component={Transactions}
                    />
                    <Route exact path="/articles" component={Articles} />
                    <Route
                      exact
                      path="/article-layout"
                      component={ArticleLayout}
                    />
                  </>
                </>
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
