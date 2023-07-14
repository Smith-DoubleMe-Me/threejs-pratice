import { Canvas } from "@react-three/fiber"

function App() {
  return (
    <>
      <h1>Three.js practice</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[0,0,0]}>
          <boxGeometry args={[1,1,1]} />
          <meshStandardMaterial color={0x00ff00} />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
