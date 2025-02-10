import React from "react";
import { UtensilsCrossed } from "lucide-react";
import ProjectInfo from "./ProjectInfo";

const GlobalHeader = () => {
  return (
    <header className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <ProjectInfo />
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle" title="Random Recipe">
          <div className="indicator">
            <UtensilsCrossed size={20} />
          </div>
        </button>
      </div>
    </header>
  );
};

export default GlobalHeader;
