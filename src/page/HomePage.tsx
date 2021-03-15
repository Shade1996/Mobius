import  React, { useState, Suspense, useRef }  from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { Spring } from 'react-spring/renderprops'
import Bike3d from '../components/Bike3d'
import DrawerCard from '../components/DrawerCard'
import { LineChart, Line, ResponsiveContainer, XAxis, Legend } from "recharts"
import VisibilitySensor from "react-visibility-sensor"
import { useMap } from './MapPage'
import { useProxy, useSnapshot } from 'valtio'
import { page } from '../state'

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

const data = [
  {
    name: "Mon",
    "meters ridden": 4000,
    "emission saved": 2400,
  },
  {
    name: "Tue",
    "meters ridden": 3000,
    "emission saved": 1398,
  },
  {
    name: "Wed",
    "meters ridden": 2000,
    "emission saved": 9800,
  },
  {
    name: "Thu",
    "meters ridden": 2780,
    "emission saved": 3908,
  },
  {
    name: "Fru",
    "meters ridden": 1890,
    "emission saved": 4800,
  },
  {
    name: "Sat",
    "meters ridden": 2390,
    "emission saved": 3800,
  },
  {
    name: "Sun",
    "meters ridden": 3490,
    "emission saved": 4300,
  }
]

const Card: React.FC<{ className?: string }> = ({ children, className }) => {
    return (
        <div className={"w-full bg-white bg-opacity-25 mt-4 text-lg rounded-3xl overflow-hidden " + className}>
            {children}
        </div>
    )
}

export default function HomePage() {
    const [scrollTop, setScrollTop] = useState(0)
    const [mapContainer, lng, lat, zoom] = useMap()
    useSnapshot(page)
    return (
        <div className="w-screen h-screen">
            <Spring to={{ top: scrollTop }} config={{ mass: 3 }}>
                {p => (
                <>
                    <div className="w-full h-full absolute inset-0 bg-green-400" style={{ opacity: p.top / 500 }} />
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
                    <div className="text-3xl font-medium mb-5 mt-10"> 
                        line2
                    </div>
                    <div className="text-5xl mb-20 font-bold">
                        Welcome back
                    </div>
                    <div className="text-lg mt-5 font-mono">
                        Your daily statistics:
                    </div>
                    <Card className="p-6">
                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <div style={{ width: window.innerWidth * 0.7, height: 300 }}>
                                    {isVisible && (
                                        <LineChart width={window.innerWidth * 0.7} height={300} data={data}>
                                            <XAxis dataKey="name" tick={{ fontSize: 10 }} tickSize={0} />
                                            <Legend layout="vertical" />
                                            <Line type="monotone" dataKey="emission saved" stroke="#8884d8" strokeWidth={2} />
                                            <Line type="monotone" dataKey="meters ridden" stroke="#82ca9d" strokeWidth={2} />
                                        </LineChart>
                                    )}
                                </div>
                            )}
                        </VisibilitySensor>
                    </Card>
                    <div className="text-lg mt-10 font-mono">
                        Current bike location:
                    </div>
                    <Card>
                        <div ref={mapContainer} onClick={()=>{page.value = "map"
                        console.log(page.value)
                        } }></div>
                    </Card>
                </DrawerCard>
            </div>
        </div>
    )
}
