import { useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber"

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useFrame((_, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh {...props} ref={meshRef} scale={active ? 1.5 : 1} onClick={(prev) => setActive(!prev)} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
      <boxGeometry args={[2,2,2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}

function App() {
  

  return (
    <>
      <h1>Three.js practice</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </>
  )
}

export default App
