import React from "react";
import Home from "./Pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Hooks/MUITheme";
import { ThemeProvider } from "@material-ui/core";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
