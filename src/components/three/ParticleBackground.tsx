"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function PointCloud() {
  const ref = useRef<THREE.Points>(null);
  
  // Create coordinates for 1500 particles in a sphere
  const [positions] = useState(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 8 + Math.random() * 4; // Sphere shell size
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  });

  // Slow ambient rotation of the particle sphere
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.03;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      // Subtle mouse interaction
      const x = (state.pointer.x * Math.PI) / 8;
      const y = (state.pointer.y * Math.PI) / 8;
      ref.current.rotation.x += y * 0.1;
      ref.current.rotation.y += x * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#EF4444"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-[#080808] -z-10" />
    );
  }

  return (
    <div className="absolute inset-0 h-full w-full -z-10 bg-[#080808] overflow-hidden">
      {/* Mesh Gradient backdrop */}
      <div className="absolute inset-0 bg-radial-gradient from-violet-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
      
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <PointCloud />
      </Canvas>
    </div>
  );
}
