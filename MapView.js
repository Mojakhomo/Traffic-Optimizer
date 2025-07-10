import React, { useEffect, useRef, useState } from 'react';

const MapView = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [heatmapLayer, setHeatmapLayer] = useState(null);
  const [trafficLayer, setTrafficLayer] = useState(null);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showTraffic, setShowTraffic] = useState(false);

  useEffect(() => {
    const initMap = () => {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: -29.609988, lng: 28.233608 }, // Lesotho
        zoom: 8,
        mapTypeId: 'roadmap',
      });

      const sampleData = [
        new window.google.maps.LatLng(-29.61, 28.23),
        new window.google.maps.LatLng(-29.60, 28.25),
        new window.google.maps.LatLng(-29.32, 28.15),
        new window.google.maps.LatLng(-29.42, 27.86),
        new window.google.maps.LatLng(-30.40, 27.70),
        new window.google.maps.LatLng(-28.99, 28.75),
      ];

      const heatmap = new window.google.maps.visualization.HeatmapLayer({
        data: sampleData,
        radius: 30,
        opacity: 0.6,
      });

      const traffic = new window.google.maps.TrafficLayer();

      setHeatmapLayer(heatmap);
      setTrafficLayer(traffic);

      // Show initial layers
      heatmap.setMap(mapInstance.current);
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAbx_2Ysocjfrh1m05bZlICNcRGXXhKsWA&libraries=visualization`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const toggleHeatmap = () => {
    if (!heatmapLayer) return;
    if (showHeatmap) {
      heatmapLayer.setMap(null);
    } else {
      heatmapLayer.setMap(mapInstance.current);
    }
    setShowHeatmap(!showHeatmap);
  };

  const toggleTraffic = () => {
    if (!trafficLayer) return;
    if (showTraffic) {
      trafficLayer.setMap(null);
    } else {
      trafficLayer.setMap(mapInstance.current);
    }
    setShowTraffic(!showTraffic);
  };

  const toggleMapType = () => {
    const current = mapInstance.current.getMapTypeId();
    const next = current === 'roadmap' ? 'satellite' : 'roadmap';
    mapInstance.current.setMapTypeId(next);
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded-lg shadow space-x-2">
        <button onClick={toggleHeatmap} className="px-3 py-1 bg-blue-500 text-white rounded">
          {showHeatmap ? 'Hide Heatmap' : 'Show Heatmap'}
        </button>
        <button onClick={toggleTraffic} className="px-3 py-1 bg-green-600 text-white rounded">
          {showTraffic ? 'Hide Traffic' : 'Show Traffic'}
        </button>
        <button onClick={toggleMapType} className="px-3 py-1 bg-gray-700 text-white rounded">
          Toggle Map Type
        </button>
      </div>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default MapView;
