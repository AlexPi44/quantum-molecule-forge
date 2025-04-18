import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import MoleculeGroup from "./components/MoleculeGroup";
import { exportSceneToGLB } from "./utils/exportToGLB";

export default function MoleculeViewer3D({ molecule, isAnimating, zoom }) {
  const sceneRef = useRef();

  useFrame(() => {
    if (isAnimating && sceneRef.current) {
      sceneRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10 * zoom]} fov={50} />
        <OrbitControls enablePan={false} enableZoom={true} />
        <Environment preset="studio" />
        <group ref={sceneRef}>
          <MoleculeGroup molecules={[molecule]} />
        </group>
      </Canvas>
      <button
        className="absolute bottom-4 right-4"
        onClick={() => exportSceneToGLB(sceneRef.current, `molecule_${Date.now()}`)}
      >
        Export .glb
      </button>
    </>
  );
}
