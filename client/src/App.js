import React from "react";
import Home from "./Pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Hooks/MUITheme";
import { ThemeProvider } from "@material-ui/core";
import ProgressPage from "./Pages/ProgressPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubjectDashBoard from "./Pages/SubjectDashboard";
import Paractice from "./Pages/Paractice";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <ProgressPage />
            </Route>
            <Route exact path="/demo/:subject">
              <SubjectDashBoard />
            </Route>
            <Route exact path="/paractice">
              <Paractice />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
