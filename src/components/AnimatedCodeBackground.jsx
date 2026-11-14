
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text } from "@react-three/drei";
import { useRef } from "react";

const codeItems = [
  { text: "</>", position: [-3.2, 1.5, -2], color: "#22c55e", size: 0.7 },
  { text: "{ }", position: [3.1, 1.4, -1], color: "#38bdf8", size: 0.8 },
  { text: "const", position: [-2.8, -1.5, -1], color: "#a78bfa", size: 0.5 },
  { text: "01", position: [2.8, -1.7, -2], color: "#22c55e", size: 0.7 },
  { text: "function()", position: [0, 2.5, -3], color: "#38bdf8", size: 0.4 },
  { text: "React", position: [-4, 0, -3], color: "#38bdf8", size: 0.45 },
  { text: "JS", position: [4, 0, -3], color: "#eab308", size: 0.5 },
];

function FloatingCode({ item, index }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;

    ref.current.rotation.y = Math.sin(time * 0.35 + index) * 0.2;
    ref.current.rotation.x = Math.cos(time * 0.25 + index) * 0.1;

    ref.current.position.y =
      item.position[1] + Math.sin(time * 0.6 + index) * 0.2;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
      <Text
        ref={ref}
        position={item.position}
        fontSize={item.size}
        color={item.color}
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.75}
      >
        {item.text}
      </Text>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <pointLight
        position={[3, 3, 4]}
        intensity={25}
        color="#22c55e"
      />

      <pointLight
        position={[-3, -2, 3]}
        intensity={20}
        color="#3b82f6"
      />

      <Stars
        radius={40}
        depth={30}
        count={1000}
        factor={3}
        fade
        speed={0.5}
      />

      {codeItems.map((item, index) => (
        <FloatingCode key={index} item={item} index={index} />
      ))}
    </>
  );
}

export default function AnimatedCodeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
