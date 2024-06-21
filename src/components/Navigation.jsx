import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/about"
              state={{ myKey: "important data", luckeyNumber: 12 }}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/pricing">
              <button>Pricing</button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
