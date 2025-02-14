import React, { Suspense , useState, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const { scene } = useGLTF('/desktop_pc/scene.gltf' , true);


  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={0.7} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={scene} scale={isMobile ? 0.45:0.75} position={isMobile ? [0, -2, -1]:[0, -2.5, -1.4]} rotation={[0,-0.2,0]} />
    </mesh>
  );
};

function ComputersCanvas() {
  const [isMobile,setIsMobile] = useState(false);

  useEffect(() =>{
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change",handleMediaQueryChange)
    }

  }, [])
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
