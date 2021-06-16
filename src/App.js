import logo from "./logo.svg";
import Home from "./Pages/Home/Home";
import PrimaryNavbar from "./Pages/Common/PrimaryNavbar/PrimaryNavbar";
import ScorecardBar from "./Pages/Common/ScorecardBar/ScorecardBar";
import SecondaryNavbar from "./Pages/Common/SecondaryNavbar/SecondaryNavbar";
import Footer from "./Pages/Common/Footer/Footer";
import field from "./Assets/field.png";
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <PrimaryNavbar />
      <ScorecardBar />
      <SecondaryNavbar />
      <div className="overLay">
        <div className="field">
          <div className="App">
            <Home />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
