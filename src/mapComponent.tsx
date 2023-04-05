import React, { useEffect, useRef, useImperativeHandle } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import area from '@turf/area';

interface MapComponentProps {
  onPolygonDrawn: (area: number) => void;
  isDrawing: boolean;
}

const MapComponent = React.forwardRef((props: MapComponentProps, ref) => {
  const mapContainer = useRef(null);
  const drawRef = useRef<MapboxDraw | null>(null);

  useImperativeHandle(ref, () => ({
    handleDeleteSelected: () => {
      if (drawRef.current) {
        drawRef.current.deleteAll();
      }
    },
  }));

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
        polygon: false,
        trash: false

      },
      userProperties: true,
    });

    drawRef.current = draw;

    map.addControl(draw);

    map.on('draw.create', () => {
      const data = draw.getAll();
      if (data.features.length > 0) {
        const currentFeature = data.features[0];
        const currentArea = area(currentFeature);
        props.onPolygonDrawn(currentArea);
      }
    });


    map.on('load', () => {
      if (!props.isDrawing) {
        draw.changeMode('simple_select');
      } else {
        draw.changeMode('draw_polygon');
      }
    });
    // Clean up the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (drawRef.current) {
      if (props.isDrawing) {
        drawRef.current.changeMode('draw_polygon');
      } else {
        drawRef.current.changeMode('simple_select');
      }
    }
  }, [props.isDrawing]);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
});

export default MapComponent;
