// src/components/Heatmap.js
import React from 'react';
import { GoogleMap, useJsApiLoader, HeatmapLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const center = {
  lat: -29.3158,
  lng: 27.4854
};

// Sample heatmap data (just a few points for testing)
const heatMapData = [
  new window.google.maps.LatLng(-29.3158, 27.4854),
  new window.google.maps.LatLng(-29.3160, 27.4870),
  new window.google.maps.LatLng(-29.3170, 27.4860),
];

export default function Heatmap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '', // ✅ your key
    libraries: ['visualization'],
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      <HeatmapLayer data={heatMapData} />
    </GoogleMap>
  ) : (
    <p>Loading...</p>
  );
}
