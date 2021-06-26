import React from "react";
import Home from "./Pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Hooks/MUITheme";
import { ThemeProvider } from "@material-ui/core";
import DemoPage from "./Pages/Demo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubjectDashBoard from "./Pages/SubjectDashboard";
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
              <DemoPage />
            </Route>
            <Route exact path="/demo/:subject">
              <SubjectDashBoard />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
