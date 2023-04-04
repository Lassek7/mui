export const drones = [
    {
      id: 1,
      name: 'Drone 1',
      battery: 85,
      signalStrength: 95,
      location: {
        lat: 51.505,
        lng: -0.09,
      },
      mission: [
        { lat: 51.51, lng: -0.08 },
        { lat: 51.51, lng: -0.10 },
        { lat: 51.50, lng: -0.10 },
      ],
      altitude: 120,
      speed: 10,
      minDistance: 5,
    },
    {
      id: 2,
      name: 'Drone 2',
      battery: 60,
      signalStrength: 70,
      location: {
        lat: 51.505,
        lng: -0.095,
      },
      mission: [
        { lat: 51.52, lng: -0.08 },
        { lat: 51.52, lng: -0.10 },
        { lat: 51.50, lng: -0.12 },
      ],
      altitude: 100,
      speed: 12,
      minDistance: 6,
    },
    // More drone objects...
  ];
  