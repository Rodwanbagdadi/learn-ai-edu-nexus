import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(3000);
    const colors = new Float32Array(3000);
    
    for (let i = 0; i < 1000; i++) {
      // Position particles in a sphere
      const radius = Math.random() * 10 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random colors with blue/purple theme
      const hue = (Math.random() * 0.3 + 0.6) % 1; // Blue to purple range
      const color = new THREE.Color().setHSL(hue, 0.8, 0.7);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Gentle floating motion
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null!);
  
  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ],
      speed: Math.random() * 0.02 + 0.01,
      scale: Math.random() * 0.5 + 0.3,
      color: new THREE.Color().setHSL((i * 0.1 + 0.6) % 1, 0.8, 0.6),
    }));
  }, []);

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((orb, i) => {
        const time = state.clock.elapsedTime;
        orb.position.x += Math.sin(time * orbs[i].speed) * 0.01;
        orb.position.y += Math.cos(time * orbs[i].speed * 1.5) * 0.01;
        orb.rotation.x = time * orbs[i].speed;
        orb.rotation.y = time * orbs[i].speed * 0.7;
      });
    }
  });

  return (
    <group ref={orbsRef}>
      {orbs.map((orb, i) => (
        <Sphere key={i} position={orb.position as [number, number, number]} scale={orb.scale}>
          <meshStandardMaterial
            color={orb.color}
            transparent
            opacity={0.3}
            emissive={orb.color}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}
    </group>
  );
}

function WaveGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  const geometry = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    return geometry;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const positionAttribute = meshRef.current.geometry.getAttribute('position');
      
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const wave = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time) * 0.5;
        positionAttribute.setZ(i, wave);
      }
      
      positionAttribute.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -8, -5]} rotation={[-Math.PI / 4, 0, 0]}>
      <meshStandardMaterial
        color="#4338ca"
        transparent
        opacity={0.1}
        wireframe
        emissive="#3730a3"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#60a5fa" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#a855f7" />
        
        <ParticleField />
        <FloatingOrbs />
        <WaveGeometry />
      </Canvas>
    </div>
  );
}
