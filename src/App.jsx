import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/user/:userId/:projectId" element={<Profile />} />
        <Route path="/user/:userId/:projectId/settings" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
