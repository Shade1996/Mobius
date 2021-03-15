import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
//@ts-ignore
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'
import DrawerCard from '../components/DrawerCard'
import { page } from '../state'
import { useSnapshot } from 'valtio'
//@ts-ignore
mapboxgl.workerClass = MapboxWorker
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZGUyMzMiLCJhIjoiY2ttN2YzeTFxMHhmbzJ2b2o2cHdtYmN5MyJ9.jMG5SOHve0NgU2aYqSX5BA'

export const useMap = () => {
    const mapContainer = useRef()

    const [lng, setLng] = useState(2.341960)
    const [lat, setLat] = useState(48.863129)
    const [zoom, setZoom] = useState(9)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        })
        map.on('move', () => {
            setLng(parseFloat(map.getCenter().lng.toFixed(4)))
            setLat(parseFloat(map.getCenter().lat.toFixed(4)))
            setZoom(parseFloat(map.getZoom().toFixed(2)))
        })

        const el = document.createElement('div')
        el.className = "w-0 h-0"
        el.innerHTML = `
            <div class="w-4 h-4 bg-blue-500 rounded-full transform -translate-x-20 -translate-y-40"></div>
        `

        new mapboxgl.Marker(el).setLngLat([lng, lat]).addTo(map)

        return () => {
            map.remove()
        }
    }, [])

    return [mapContainer, lng, lat, zoom] as const
}

export default function MapPage() {
    const [mapContainer] = useMap()
    useSnapshot(page)
    return (
        <div className="w-screen h-screen">
            <div className="absolute inset-0" ref={mapContainer} />
            <div className="w-full h-full overflow-y-scroll absolute inset-0">
                <div className="h-5/6" />
                <DrawerCard>
                    <div className="parent w-full gap-4">
                        <div className="div1 text-2xl text-center bg-red-200 p-2 rounded-2xl center-y">
                            <div className="inline-block align-middle">
                                    00:16:53 
                                <div className="font-light text-lg">RIDE TIME</div>
                            </div>
                        </div>
                        <div className="div2 text-2xl text-center bg-gray-100 p-2 rounded-2xl center-y">
                            <div className="align-middle inline-block">
                                <div>16.4</div>
                                <div className="text-lg">AVG SPEED</div>
                            </div>
                        </div>
                        <div className="div3 text-2xl text-center  bg-gray-100 p-2 rounded-2xl center-y">
                            <div className="align-middle inline-block">
                                <div className="">4.1</div>
                                <div className="text-lg ">DISTANCE</div>
                            </div>
                        </div>
                        <div className="div4 text-xl text-center font-semibold bg-black text-white p-2 rounded-2xl">PAUSE </div>
                        <div className="div5 text-xl text-center font-semibold bg-red-600 p-2 rounded-2xl">STOP </div>
                    </div>
                </DrawerCard>
            </div>
        </div>
    )
}
