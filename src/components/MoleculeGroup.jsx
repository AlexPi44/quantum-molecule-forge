import React from "react";
import Molecule from "./Molecule";

export default function MoleculeGroup({ molecules }) {
  return (
    <group>
      {molecules.map((molecule, i) => {
        const angle = (i / molecules.length) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <group key={i} position={[x, 0, z]}>
            <Molecule data={molecule} />
          </group>
        );
      })}
    </group>
  );
}
