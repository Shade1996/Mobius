import  React, { useState, Suspense, useRef }  from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { Spring } from 'react-spring/renderprops'
import Bike3d from '../components/Bike3d'
import { Html } from "drei"
import { List, ListItem } from '@material-ui/core'
import DrawerCard from '../components/DrawerCard'

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

const topToOpacity = (top: number) => {
  if (top < 0) return 0
  if (top > 500) return 500
  return top / 500
}

export default function HomePage() {
  const [scrollTop, setScrollTop] = useState(0)

  return (
    <div className="w-screen h-screen">
      <Spring to={{ top: scrollTop }} config={{ mass: 3 }}>
        {p => (
          <>
            <div className="w-full h-full absolute inset-0 bg-green-400" style={{ opacity: topToOpacity(p.top) }} />
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight intensity={0.8} position={[300, 300, 400]} />
              <group position={[-40, p.top / 10 - 20, -130]} rotation={[0, (p.top / 8 + 45) * rad2deg, 0]}>
                  <Suspense fallback={<Loading />}>
                      <Bike3d />
                  </Suspense>
              </group>
            </Canvas>
          </>
        )}
      </Spring>
      <div
       className="w-full h-full overflow-x-hidden overflow-y-scroll absolute inset-0"
       onScroll={e => setScrollTop((e.target as HTMLDivElement).scrollTop)}
      >
        <div style={{ height: "65%" }} />
        <DrawerCard>
            <div className="text-5xl mb-5 font-bold">
              Welcome back
            </div>
            <div className="text-3xl mb-5"> 
              line2
            </div>
            <div className="text-xl font-bold">line 3</div>
            <div className="inline-block mr-4 text-xl mt-5">Routes</div>
            <div className="inline-block text-xl">Challenges</div>
            <div className="flow-root w-72 bg-gray-800 mt-12 p-6 text-lg rounded-3xl">
              <List  className="text-white space-y-12" >
                <ListItem className="border border-yellow-700">123</ListItem>
                <ListItem className="border border-yellow-700">123</ListItem>
                <ListItem className="border border-yellow-700">123</ListItem>
              </List>
            </div>
        </DrawerCard>
      </div>
    </div>
  )
}
