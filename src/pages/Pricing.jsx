import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      Show Pricing
      <nav>
        <Link to="/free">Free</Link>
        <Link to="/premium">Premium</Link>
        <Link to="/freemium">Freemium</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Pricing;
