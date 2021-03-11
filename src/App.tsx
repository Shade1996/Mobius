import  React, { useState, Suspense }  from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { Spring } from 'react-spring/renderprops'
import Bike3d from './components/Bike3d'
import { Html } from "drei"

function Loading() {
	return (
		<mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
			<sphereGeometry attach="geometry" args={[1, 16, 16]} />
			<meshStandardMaterial
			 attach="material"
			 color="white"
			 transparent
			 opacity={0.6}
			 roughness={1}
			 metalness={0}
			/>
		</mesh>
	)
}

const rad2deg = Math.PI / 180

export default function App() {
  const [scrollTop, setScrollTop] = useState(0)

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Spring from={{ top: 0 }} to={{ top: scrollTop }}>
        {(p) => (
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <group position={[-40, p.top / 30 - 20, -130]} rotation={[0, (p.top / 50 + 45) * rad2deg, 0]}>
                <Suspense fallback={<Loading />}>
                    <Bike3d />
                </Suspense>
                <Html>
                    <div className="text-9xl">
                      hello world!!!
                    </div>
                    <div className="text-4xl"> 
                      line2
                    </div>
                    <div className="text-6xl font-bold">line 3</div>
                </Html>
            </group>
          </Canvas>
        )}
      </Spring>
      <div className="w-full h-full absolute inset-0 overflow-x-hidden overflow-y-scroll space-y-6" onScroll={(e) => setScrollTop((e.target as HTMLDivElement).scrollTop)}>
        <div style={{ width: "100%", height: "200%" }}></div>
      </div>
    </div>
  )
}
