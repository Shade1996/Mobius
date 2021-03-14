import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
//@ts-ignore
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import MapModal from '../components/MapModal';
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
            <MapModal />
        </div>
    )
}
