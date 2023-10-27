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
import Campaigns from "./pages/Campaigns";
import ViewCampaign from "./pages/ViewCampaign";
import VoteResults from "./pages/VoteResults";
import PreviousWinners from "./pages/PreviousWinners";

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
              <Route path="previous-winners" element={<PreviousWinners />} />
              <Route path="campaigns" element={<Campaigns />} />
              <Route path="campaigns/:campaignId" element={<ViewCampaign />} />
              <Route
                path="campaigns/:campaignId/category/:categoryId"
                element={<VoteResults />}
              />
            </Route>

            <Route path="*" element={<NoPage />} />
          </Switch>
        </Router>
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default App;
