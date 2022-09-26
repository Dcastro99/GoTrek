import React, { useState, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { MapContainer, MapButton } from './MapElement';
import 'mapbox-gl/dist/mapbox-gl.css';
// import trailData from '../../assets/data/allTrails.json';
import trailData from '../../assets/data/test-data.json';

import { FaWalking} from 'react-icons/fa';

function ReactMap() {
    const [viewport, setViewport] = useState({
      // latitude: 47,
      // longitude: -122,
      // width: '100vw',
      // height: '100vh',
      // zoom: 5
    })

    const [selectedTrail, setSelectedTrail] = useState(null);


    return (
      <MapContainer>
        <ReactMapGL
          {...viewport}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          // select map style: these come from your custom maps on mapbox
          mapStyle='mapbox://styles/mapbox3030/cl8i60t5r000b14q9ggkqut48'
          // mapStyle='mapbox://styles/mapbox3030/cl8ia5us3000915owh9k1xxhu'
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
          >
          {trailData.map(trail => (
            <Marker 
              key={trail.name} 
              latitude={trail.coordinates.lat} 
              longitude={trail.coordinates.lon}
            >
              <MapButton onClick={(e) => {
                e.preventDefault();
                setSelectedTrail(trail);
              }}>
                <FaWalking/>
              </MapButton>
            </Marker>
          ))}
          {selectedTrail ? (
            <Popup 
              latitude={selectedTrail.coordinates.lat} 
              longitude={selectedTrail.coordinates.lon}
              onClose={() => {
                setSelectedTrail(null);
              }}
            >
              <h3>{selectedTrail.name}</h3>
                {/* <p>{selectedTrail.url}</p> */}
                {/* <p>
                  {selectedTrail.length}
                  {selectedTrail.gain}
                  {selectedTrail.requiredPass}
                </p> */}
            </Popup>
          ) : null}
        </ReactMapGL>
    </MapContainer>
  )

};
export default ReactMap;



















// const mapRef = useRef<ReactMapGL | null>(null);
// const [viewport, setViewport ] = useState({
//   latitude: 43,
//   longitude: -79,
//   zoom: 10,
// })
  
// return (
//   <MapContainer>
//     <ReactMapGL 
//       {...viewport} 
//       width='100%' 
//       height='calc(100vh - 64px)'
//       mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//       onViewportChange={nextViewport => setViewport(nextViewport)}
//       // ref={(instance) => (mapRef.current = instance)}
//       // minZoom={5}
//       // maxZoom={15}
//       mapStyle='mapbox://styles/mapbox3030/cl8i60t5r000b14q9ggkqut48'
//     ></ReactMapGL>
//     <h1>Hello World</h1>
//   </MapContainer>
// );