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
import AdminLayout from "./layouts/AdminLayout";

import HomePage from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import AdminLogin from "./pages/AdminLogin";
import VoteResults from "./pages/VoteResults";
import ViewCampaign from "./pages/ViewCampaign";
import AdminDashboard from "./pages/AdminDashboard";
import PreviousWinners from "./pages/PreviousWinners";

// Other assets
import "./App.css";
import AdminUsers from "./pages/AdminUsers";

function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<SuspenseFallback />}>
        <Router>
          <Switch>
            <Route path="/admin" element={<AdminLogin />} />

            <Route path="/admin/dashboard" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
            </Route>

            <Route exact path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="campaigns" element={<Campaigns />} />
              <Route path="previous-winners" element={<PreviousWinners />} />
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
