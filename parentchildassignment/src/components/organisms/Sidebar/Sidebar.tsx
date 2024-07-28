import React from "react";
import Molecule from "../../molecule/HomeMolecule/Molecule";
import WatchButton from "../../molecule/WatchMolecule/WatchButton";

const Sidebar: React.FC = () => {
  return (
    <div>
      <Molecule />
      <WatchButton />
    </div>
  );
};

export default Sidebar;
