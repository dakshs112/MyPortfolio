import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Torus, Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

const CentralOrb = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + scrollY * 0.002;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + scrollY * 0.003;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.6, 4]}>
        <MeshDistortMaterial
          color="#64ffda"
          emissive="#0a3a4a"
          emissiveIntensity={0.6}
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          wireframe={false}
        />
      </Icosahedron>
    </Float>
  );
};

const WireframeIco = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -state.clock.elapsedTime * 0.15 - scrollY * 0.001;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 + scrollY * 0.002;
    }
  });
  return (
    <Icosahedron ref={meshRef} args={[2.4, 1]}>
      <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.25} />
    </Icosahedron>
  );
};

const OrbitingTorus = ({ scrollY }: { scrollY: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4 + scrollY * 0.003;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <group ref={groupRef}>
      <Torus args={[3.2, 0.02, 16, 200]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#64ffda" transparent opacity={0.6} />
      </Torus>
      <Torus args={[3.8, 0.015, 16, 200]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#a855f7" transparent opacity={0.5} />
      </Torus>
      <Torus args={[4.4, 0.01, 16, 200]} rotation={[Math.PI / 2.5, -Math.PI / 6, 0]}>
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
      </Torus>
    </group>
  );
};

const Particles = ({ scrollY }: { scrollY: number }) => {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#64ffda'),
      new THREE.Color('#4f46e5'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#3b82f6'),
    ];
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 10;
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
      ref.current.rotation.y = state.clock.elapsedTime * 0.05 + scrollY * 0.0008;
      ref.current.rotation.x = scrollY * 0.0005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
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

const ThreeBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      {/* Radial dark gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, hsl(222 60% 12%) 0%, hsl(222 84% 5%) 55%, hsl(222 90% 3%) 100%)',
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 7], fov: 70 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} color="#64ffda" intensity={1.2} />
        <pointLight position={[-10, -8, -5]} color="#a855f7" intensity={1} />
        <pointLight position={[0, 5, -8]} color="#4f46e5" intensity={0.8} />

        <Stars radius={120} depth={60} count={4000} factor={4} saturation={0} fade speed={1} />

        <CentralOrb scrollY={scrollY} />
        <WireframeIco scrollY={scrollY} />
        <OrbitingTorus scrollY={scrollY} />
        <Particles scrollY={scrollY} />
      </Canvas>

      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, hsl(222 90% 3% / 0.7) 100%)',
        }}
      />
    </div>
  );
};

export default ThreeBackground;
