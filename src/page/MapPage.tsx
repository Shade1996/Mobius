import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
//@ts-ignore
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import DrawerCard from '../components/DrawerCard';
//@ts-ignore
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZGUyMzMiLCJhIjoiY2ttN2YzeTFxMHhmbzJ2b2o2cHdtYmN5MyJ9.jMG5SOHve0NgU2aYqSX5BA'



export default function MapPage() {
    const mapContainer = useRef();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        map.on('move', () => {
            //@ts-ignore
            setLng(map.getCenter().lng.toFixed(4))
            //@ts-ignore
            setLat(map.getCenter().lat.toFixed(4))
            //@ts-ignore
            setZoom(map.getZoom().toFixed(2))
            });
        return () => map.remove();
        
        }, [])

    return (
        <div className="w-screen h-screen bg-yellow-300">
            <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div className="map-container" ref={mapContainer} />
            <DrawerCard>
                <div className="parent w-10/12 gap-4">
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
    )
}
