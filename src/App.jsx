import { useState, useEffect, useRef } from 'react'
import './App.css'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    mapInstanceRef.current = L.map(mapRef.current).setView([40.8656557, -73.8079112], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(mapInstanceRef.current);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <h1>Park Trails</h1>
  <div ref={mapRef} id="map" style={{ height: '600px', width: '100%' }}></div>
    </>
  )
}

export default App
