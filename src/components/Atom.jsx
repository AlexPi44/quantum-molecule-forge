import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { AtomGlowMaterial } from "../shaders/AtomGlowMaterial";

export default function Atom({ element }) {
  useFrame((state) => {
    AtomGlowMaterial.uniforms.time.value = state.clock.getElapsedTime();
  });

  const color = new THREE.Color(element.color || "#0ff");

  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <shaderMaterial
        attach="material"
        args={[{ ...AtomGlowMaterial, uniforms: { ...AtomGlowMaterial.uniforms, glowColor: { value: color } } }]}
      />
    </mesh>
  );
}
