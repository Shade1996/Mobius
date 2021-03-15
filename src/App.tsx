import React from 'react'
import { useSnapshot } from 'valtio'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage'
import MapPage from './page/MapPage'
import { page } from './state'

export default function App() {
    useSnapshot(page)
    // if(page.value === "home") return <HomePage />
    // if(page.value === "map") return <MapPage />
    return (
        <div>
            {page.value === "home" && <HomePage />}
            {page.value ==="map" && <MapPage />}
        </div>
    )
}
