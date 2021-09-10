import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResultsContextProvider from "./components/wrappers/ResultsContext";
import Header from "./components/elem/Header";
import ResultPanel from "./components/features/ResultPanel";

export default function App() {
  return (
    <>
      <Header />
      <div className="pageContent">
        <Router>
          <Switch>
            <Route
              exact
              path={[
                "/",
                "/:artist",
                "/:artist/:release",
                "/:artist/:release/:title",
              ]}
            >
              <ResultsContextProvider>
                <ResultPanel />
              </ResultsContextProvider>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
