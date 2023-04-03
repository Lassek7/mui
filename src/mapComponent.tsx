import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibGFzc2VrNyIsImEiOiJjbGV5ODczZXQwMmhvM3dwdWt4c3djdGwyIn0.5Y0JJGGifcqcYapcs6lUBw';

    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainer.current || '',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [12.4924, 55.7068], // Initial map center coordinates [longitude, latitude]
      zoom: 10,
    });

    // Clean up the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default MapComponent;
