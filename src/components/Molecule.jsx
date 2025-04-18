import React from "react";
import Atom from "./Atom";
import AtomOrbitCloud from "../AtomOrbitCloud";

export default function Molecule({ data }) {
  return (
    <group>
      {data.elements.map((atom, i) => (
        <group key={i} position={[Math.random(), Math.random(), Math.random()]}>
          <Atom element={atom} />
          <AtomOrbitCloud position={[0, 0, 0]} size={0.8} color={atom.color || "#44f"} />
        </group>
      ))}
    </group>
  );
}
