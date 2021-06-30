import React from "react";
import Home from "./Pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Hooks/MUITheme";
import { ThemeProvider } from "@material-ui/core";
// import ProgressPage from "./Pages/ProgressPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SubjectDashBoard from "./Pages/SubjectDashboard";
// import Paractice from "./Pages/Paractice";
// import LogIn from "./Pages/LogIn";
// import SignUp from "./Pages/SignUp";
import { Suspense, lazy } from "react";
const Progress = React.lazy(() => import("./Pages/ProgressPage"));
const ParacticePage = React.lazy(() => import("./Pages/Paractice"));
const LogInPage = React.lazy(() => import("./Pages/LogIn"));
const SignUpPage = React.lazy(() => import("./Pages/SignUp"));
const SubjectPage = React.lazy(() => import("./Pages/SubjectDashboard"));
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
            <Suspense fallback={<h1>loding</h1>}>
              <Route exact path="/home">
                <Progress />
              </Route>
              <Route exact path="/home/:subject">
                <SubjectPage />
              </Route>
              <Route exact path="/home/paractice/:subject">
                <ParacticePage />
              </Route>
              <Route exact path="/login">
                <LogInPage />
              </Route>
              <Route exact path="/signup">
                <SignUpPage />
              </Route>
            </Suspense>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
