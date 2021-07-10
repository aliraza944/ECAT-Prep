import React from "react";
import Home from "./Pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Hooks/MUITheme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContextProvider } from "./Store";
import { Suspense } from "react";
import LoginStatus from "./Components/LoginStatus";
import CircularProgress from "@material-ui/core/CircularProgress";
const Progress = React.lazy(() => import("./Pages/ProgressPage"));
const ParacticePage = React.lazy(() => import("./Pages/Paractice"));
const LogInPage = React.lazy(() => import("./Pages/LogIn"));
const SignUpPage = React.lazy(() => import("./Pages/SignUp"));
const SubjectPage = React.lazy(() => import("./Pages/SubjectDashboard"));
const LazyAdmin = React.lazy(() => import("./Pages/Admin"));
function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <LoginStatus></LoginStatus>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Suspense
                fallback={
                  <div
                    className="spinner"
                    style={{ width: "100%", height: "100vh" }}
                  >
                    (
                    <CircularProgress size="4rem" color="secondary" />
                  </div>
                }
              >
                <Route exact path="/home">
                  <Progress />
                </Route>
                <Route exact path="/home/:subject">
                  <SubjectPage />
                </Route>
                <Route exact path="/paractice/:subject">
                  <ParacticePage />
                </Route>
                <Route exact path="/login">
                  <LogInPage />
                </Route>
                <Route exact path="/signup">
                  <SignUpPage />
                </Route>

                <Route exact path="/mango/admin">
                  <LazyAdmin />
                </Route>
              </Suspense>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
