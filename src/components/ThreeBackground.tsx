import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

// Central distorted glowing orb
const CentralOrb = ({ scrollY }: { scrollY: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.2 + scrollY * 0.001;
    ref.current.rotation.x = t * 0.1;
    const s = 1 + Math.sin(t * 0.8) * 0.05;
    ref.current.scale.setScalar(s);
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.6, 32]} />
        {/* @ts-ignore */}
        <MeshDistortMaterial
          color="#6d28d9"
          emissive="#7c3aed"
          emissiveIntensity={0.6}
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
    </Float>
  );
};

// Orbiting neon ring
const OrbitRing = ({
  radius,
  color,
  tilt,
  speed,
  thickness = 0.02,
  scrollY,
}: {
  radius: number;
  color: string;
  tilt: [number, number, number];
  speed: number;
  thickness?: number;
  scrollY: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = tilt[2] + t * speed + scrollY * 0.0008;
    ref.current.rotation.x = tilt[0] + Math.sin(t * 0.3) * 0.1;
    ref.current.rotation.y = tilt[1] + Math.cos(t * 0.2) * 0.1;
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, thickness, 16, 200]} />
      <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.95} />
    </mesh>
  );
};

// Glow sprite around orb
const Halo = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = 2.4 + Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.08} toneMapped={false} />
    </mesh>
  );
};

// Floating particles
const Particles = ({ scrollY }: { scrollY: number }) => {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#22d3ee'),
      new THREE.Color('#ec4899'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#7c3aed'),
    ];
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.04 + scrollY * 0.0006;
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const Scene = ({ scrollY }: { scrollY: number }) => {
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = scrollY * 0.0008;
      group.current.rotation.x = scrollY * 0.0004;
    }
  });
  return (
    <group ref={group}>
      <Halo />
      <CentralOrb scrollY={scrollY} />
      <OrbitRing radius={2.6} color="#22d3ee" tilt={[0.6, 0.2, 0]} speed={0.3} thickness={0.015} scrollY={scrollY} />
      <OrbitRing radius={3.1} color="#ec4899" tilt={[-0.4, 0.5, 0.3]} speed={-0.25} thickness={0.018} scrollY={scrollY} />
      <OrbitRing radius={3.6} color="#a855f7" tilt={[0.8, -0.3, 0.7]} speed={0.2} thickness={0.025} scrollY={scrollY} />
      <OrbitRing radius={4.2} color="#7c3aed" tilt={[-0.2, 0.8, -0.4]} speed={-0.15} thickness={0.012} scrollY={scrollY} />
    </group>
  );
};

const ThreeBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      {/* Dark cosmic backdrop with aurora glows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 25% 30%, hsl(280 80% 18% / 0.55) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, hsl(190 90% 15% / 0.45) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, hsl(320 70% 12% / 0.35) 0%, transparent 60%), linear-gradient(180deg, hsl(240 60% 4%) 0%, hsl(260 70% 3%) 100%)',
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 7], fov: 70 }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} color="#22d3ee" intensity={1.2} />
        <pointLight position={[-5, -3, 4]} color="#ec4899" intensity={1} />
        <pointLight position={[0, 4, -5]} color="#a855f7" intensity={1} />

        <Stars radius={120} depth={60} count={4000} factor={3.5} saturation={0.4} fade speed={1} />
        <Scene scrollY={scrollY} />
        <Particles scrollY={scrollY} />
      </Canvas>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, hsl(240 70% 3% / 0.9) 100%)',
        }}
      />
    </div>
  );
};

export default ThreeBackground;
