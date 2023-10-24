import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import SuspenseFallback from "./components/SuspenseFallback";
import ErrorBoundary from "./components/ErrorBoundary";
import NoPage from "./components/404Page";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/Home";

// Other assets
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<SuspenseFallback />}>
        <Router>
          <Switch>
            <Route exact path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>

            <Route path="*" element={<NoPage />} />
          </Switch>
        </Router>
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default App;
