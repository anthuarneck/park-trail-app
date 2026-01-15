import React from "react";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const selectedLayerRef = useRef(null);

  const trailUrl = import.meta.env.VITE_TRAIL_API_URL;

  useEffect(() => {
    if (mapInstanceRef.current) {
      return;
    }

    mapInstanceRef.current = L.map(mapRef.current, {
      maxBounds: [
        [40.45, -74.3],
        [41.3, 73.0],
      ],
      minZoom: 11,
    }).setView([40.7127, -74.0059], 13);

    mapInstanceRef.current.locate();

    mapInstanceRef.current.on("locationfound", (e) => {
      console.log("User location found:", e.latlng);
      mapInstanceRef.current.setView(e.latlng, 15);
    });

    mapInstanceRef.current.on("locationerror", (e) => {
      console.log("Location error:", e.message);
    });

    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(mapInstanceRef.current);

    mapInstanceRef.current.on("click", () => {
      if (selectedLayerRef.current) {
        selectedLayerRef.current.setStyle({ color: "#3388ff", weight: 6 });
        selectedLayerRef.current = null;
      }
    });

    fetch(trailUrl)
      .then((response) => response.json())
      .then((responseJSON) => {
        L.geoJSON(responseJSON, {
          style: (feature) => {
            return {
              color: "#3388ff",
              weight: 6,
            };
          },
          onEachFeature: (feature, layer) => {
            layer.on("click", () => {
              if (selectedLayerRef.current) {
                selectedLayerRef.current.setStyle({
                  color: "#3388ff",
                  weight: 6,
                });
              }

              layer.setStyle({ color: "yellow", weight: 6 });

              selectedLayerRef.current = layer;
            });
            const parkName = feature.properties.park_name;
            const trailName = feature.properties.trail_name;
            const trailDifficulty = feature.properties.difficulty;
            const trailSurface = feature.properties.surface;
            const trailClass = feature.properties.class;
            const trailWidth = feature.properties.width_ft;

            layer.bindPopup(`
              <div>
                <h2>Trail Info</h2>
                <p><strong>Park Name:</strong> ${parkName}</p>
                <p><strong>Trail Name:</strong> ${trailName}</p>
                <p><strong>Trail Difficulty:</strong> ${trailDifficulty}</p>
                <p><strong>Trail Surface:</strong> ${trailSurface}</p>
                <p><strong>Trail Class:</strong> ${trailClass}</p>
                <p><strong>Trail Width:</strong> ${trailWidth}</p>
                </div>`);
            layer.on("popupclose", () => {
              if (selectedLayerRef.current === layer) {
                layer.setStyle({ color: "#3388ff", weight: 6 });
                selectedLayerRef.current = null;
              }
            });
          },
        }).addTo(mapInstanceRef.current);
      })
      .catch((error) => console.log(error));

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      id="map"
      style={{
        height: "100vh",
        width: "100%",
        postition: "relative",
        zIndex: 1,
      }}
    ></div>
  );
}

export default Map;
