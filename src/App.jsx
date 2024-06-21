import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import FreePricing from "./pages/FreePricing";
import PremiumPricing from "./pages/PremiumPricing";
import Freemium from "./pages/Freemium";
import ForPremiumUsers from "./pages/ForPremiumUsers";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/user/:userId/:projectId" element={<Profile />} />
        <Route path="/user/:userId/:projectId/settings" element={<About />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/prime" element={<ForPremiumUsers />} />
        </Route>

        <Route path="/pricing" element={<Pricing />}>
          <Route path="free" element={<FreePricing />} />
          <Route path="premium" element={<PremiumPricing />} />
          <Route path="freemium" element={<Freemium />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
