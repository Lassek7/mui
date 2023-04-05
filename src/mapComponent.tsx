import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import area from '@turf/area';

interface MapComponentProps {
  onPolygonDrawn: (area: number) => void;
}

const MapComponent: React.FC<MapComponentProps> = (props) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibGFzc2VrNyIsImEiOiJjbGV5ODczZXQwMmhvM3dwdWt4c3djdGwyIn0.5Y0JJGGifcqcYapcs6lUBw';

    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainer.current || '',
      style: 'mapbox://styles/lassek7/clfpkxwx5000o01mwsgzompzz',
      center: [9.923,57.054], // Initial map center coordinates [longitude, latitude]
      zoom: 15,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      }
    });

    map.addControl(draw);

    map.on('draw.create', () => {
      const data = draw.getAll();
      if (data.features.length > 0) {
        const currentFeature = data.features[0];
        const currentArea = area(currentFeature);
        props.onPolygonDrawn(currentArea);
      }
    });

    // Clean up the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default MapComponent;
