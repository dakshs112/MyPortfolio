import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

// Animated wavy grid plane — modern, sleek, dark-tech vibe
const WaveGrid = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);
  const original = useRef<Float32Array | null>(null);

  useFrame((state) => {
    const geom = geomRef.current;
    if (!geom) return;
    const pos = geom.attributes.position as THREE.BufferAttribute;
    if (!original.current) {
      original.current = new Float32Array(pos.array as Float32Array);
    }
    const t = state.clock.elapsedTime;
    const arr = pos.array as Float32Array;
    const base = original.current;
    for (let i = 0; i < arr.length; i += 3) {
      const x = base[i];
      const y = base[i + 1];
      const wave =
        Math.sin(x * 0.4 + t * 0.8) * 0.6 +
        Math.cos(y * 0.5 + t * 0.6) * 0.6 +
        Math.sin((x + y) * 0.25 + t * 0.4) * 0.4;
      arr[i + 2] = wave;
    }
    pos.needsUpdate = true;
    if (meshRef.current) {
      meshRef.current.rotation.z = scrollY * 0.0005;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.4, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry ref={geomRef} args={[40, 40, 80, 80]} />
      <meshBasicMaterial color="#64ffda" wireframe transparent opacity={0.35} />
    </mesh>
  );
};

// Floating glowing particles
const Particles = ({ scrollY }: { scrollY: number }) => {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 2500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#64ffda'),
      new THREE.Color('#4f46e5'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#3b82f6'),
    ];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03 + scrollY * 0.0005;
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
        opacity={0.85}
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
      {/* Modern dark gradient backdrop with subtle glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, hsl(178 78% 12% / 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(262 83% 15% / 0.4) 0%, transparent 50%), linear-gradient(180deg, hsl(222 84% 4%) 0%, hsl(222 90% 3%) 100%)',
        }}
      />
      <Canvas
        camera={{ position: [0, 2, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#64ffda" intensity={1} />
        <pointLight position={[-10, -5, -5]} color="#a855f7" intensity={0.8} />

        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.8} />
        <WaveGrid scrollY={scrollY} />
        <Particles scrollY={scrollY} />
      </Canvas>

      {/* Vignette + scanline shimmer for modern feel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, hsl(222 90% 3% / 0.85) 100%)',
        }}
      />
    </div>
  );
};

export default ThreeBackground;
