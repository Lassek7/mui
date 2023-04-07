import React, { useEffect, useRef, useImperativeHandle } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import area from '@turf/area';
import buffer from '@turf/buffer';

interface MapComponentProps {
  onPolygonDrawn: (area: number) => void;
  isDrawing: boolean;
  onDrawingComplete: () => void; // Add this line
  onMapLoaded: () => void;
  drones: Array<Drones>;
}

interface Drones {
  id: string;
  battery: number;
  altitude: number;
  location: {
    lat: number;
    lng: number;
  };}

  const createDroneFeatureCollections = (
    drones: Drones[]
  ): { triangles: GeoJSON.FeatureCollection; circles: GeoJSON.FeatureCollection } => {
    const triangleFeatures: GeoJSON.Feature[] = [];
    const circleFeatures: GeoJSON.Feature[] = [];
  
    drones.forEach((drone) => {
      const { location: { lat, lng } } = drone;
  
      // Triangle feature (isosceles triangle)
      const baseWidth = 0.001;
      const height = 0.001;
      const middleVertexFactor = 0.0002; // Adjust this value between 0 and 1 to

      // Calculate the centroid of the triangle
      const centroidX = lng;
      const centroidY = lat;


      // Shift the triangle coordinates by the calculated centroid
      const triangleCoordinates = [
        [centroidX - baseWidth / 2, centroidY - height / 2],
        [centroidX, centroidY + height / 2],
        [centroidX + baseWidth / 2, centroidY - height / 2], //right side
        [centroidX, centroidY - middleVertexFactor],
        [centroidX - baseWidth / 2, centroidY - height / 2],      
      ];
  
      const triangleFeature: GeoJSON.Feature = {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [triangleCoordinates],
        },
        properties: {
          droneId: drone.id,
        },
      };
  
      triangleFeatures.push(triangleFeature);
  
      // Circle feature
      const circleFeature: GeoJSON.Feature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
        properties: {
          droneId: drone.id,
          circleRadius: 60, // Set the circle radius
        },
      };
      circleFeatures.push(circleFeature);

    });
  
    return {
      triangles: {
        type: 'FeatureCollection',
        features: triangleFeatures,
      },
      circles: {
        type: 'FeatureCollection',
        features: circleFeatures,
        
      },
    };
    
  };
          
const MapComponent = React.forwardRef((props: MapComponentProps, ref) => {
  const mapContainer = useRef(null);
  const drawRef = useRef<MapboxDraw | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useImperativeHandle(ref, () => ({
    handleDeleteSelected: () => {
      if (drawRef.current) {
        const selectedFeatures = drawRef.current.getSelected();
        if (selectedFeatures.features.length > 0) {
          selectedFeatures.features.forEach((feature) => {
            if (drawRef.current && typeof feature.id === "string") {
              drawRef.current.delete(feature.id);
            }
          });
        }
      }
    },
    map: mapRef.current,
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

    mapRef.current = map;
    drawRef.current = draw;

    map.addControl(draw);

    map.on('draw.create', () => {
      const data = draw.getAll();
      if (data.features.length > 0) {
        const currentFeature = data.features[data.features.length - 1]; // Get the last feature in the array
        const currentArea = area(currentFeature);
        console.log('Current Area:', currentArea); // Debugging
        props.onPolygonDrawn(currentArea);
        props.onDrawingComplete(); // Call the onDrawingComplete prop here

      }
    });

    

    map.on('load', () => {
      props.onMapLoaded();
      
        // Add a new source for the drone triangles
  // Add a new source and layer for the drone triangles
  const { triangles, circles } = createDroneFeatureCollections(props.drones);
  map.addSource('drone-triangles', {
    type: 'geojson',
    data: triangles,
  });
  // Add a new source and layer for the drone circles
  map.addSource('drone-circles', {
    type: 'geojson',
    data: circles,
  });

  map.addLayer({
    id: 'drone-circles',
    type: 'circle',
    source: 'drone-circles',
    paint: {
      'circle-radius': ["get", "circleRadius"], // Use the radius from the feature properties
      'circle-opacity': .3, // Set the semi-transparency
      'circle-color': '#FF0000', // Set the color of the circle
    },
  });

  map.addLayer({
    id: 'drone-triangles',
    type: 'fill',
    source: 'drone-triangles',
    layout: {},
    paint: {
      'fill-color': '#EDEDED', // Set the fill color
      'fill-opacity': 1, // Set the fill opacity
    },
  });


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
