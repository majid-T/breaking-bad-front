import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav nav-pills nav-fill">
      <Link className="nav-link nav-item" to="/charachters">
        Charachters
      </Link>

      <Link className="nav-link nav-item" to="/episodes">
        Episodes
      </Link>
    </div>
  );
};

export default Navigation;
