import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { MapContainer, MapButton, MapText } from './MapElement';
import 'mapbox-gl/dist/mapbox-gl.css';
// import trailData from '../../assets/data/allTrails.json';
import trailData from '../../assets/data/test-data.json';

import { FaWalking} from 'react-icons/fa';

import 'mapbox-gl/dist/mapbox-gl.css';

// import trailData from '../../assets/data/allTrails.json';
// import trailData from '../../assets/data/wta-parks-data.json';
import trailData from '../../assets/data/test-data.json';


function ReactMap() {
    
    const [latitude, setLatitude ] = useState('');
    const [longitude, setLongitude] = useState('');

    React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // setLatitude(position.coords.latitude),
      // setLongitude(position.coords.longitude);
      console.log(position);
    })
  }, []);

    const { viewport, setViewport } = useState({
      latitude: 47,
      longitude: -122,
      width: '100vw',
      height: '100vh',
      zoom: 10
    })

    const data = trailData.slice(0, 100);

    const [selectedTrail, setSelectedTrail] = useState(null);

    const geolocateControlRef = React.useCallback((ref) => {
      if (ref) {
        // Activate as soon as the control is loaded
        ref.trigger();
      }
    }, []);


    useEffect(() => {
      const listener = e => {
        if(e.key === 'Escape') {
          setSelectedTrail(null);
      }
    };
      window.addEventListener('keydown', listener);
      return () => {
        window.removeEventListener('keydown', listener);
      }
    }, []);

    return (
      <MapContainer>
        <MapWrapper>
          <Map
            {...viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            // mapStyle='mapbox://styles/mapbox3030/cl8i60t5r000b14q9ggkqut48'
            mapStyle='mapbox://styles/mapbox3030/cl8ia5us3000915owh9k1xxhu'
            onViewportChange={viewport => {
              setViewport({...viewport});
            }}
            >
            {data.map(trail => (
              <Marker 
                key={trail.name} 
                latitude={trail.coordinates.lat} 
                longitude={trail.coordinates.lon}
                >
                <ButtonLink
                  to='trail/{trail.name}'
                  state={{
                    from: 'map',
                    trail: trail,
                  }}
                >
                  <FaWalking/>
                  {trail.name}
                </ButtonLink>
                {/* <MapButton onClick={(e) => {
                  e.preventDefault();
                  setSelectedTrail(trail);
                }}> */}
                  {/* <FaWalking/>
                </MapButton> */}
              </Marker>
            ))}
            <GeolocateControl 
              ref={geolocateControlRef} 
              zoom={10}
              />
          </Map>
        </MapWrapper>
    </MapContainer>
  )

};
export default ReactMap;







// {selectedTrail ? (
//   <Popup 
//   latitude={selectedTrail.coordinates.lat} 
//   longitude={selectedTrail.coordinates.lon}
//   onClose={() => {
//     setSelectedTrail(null);
//   }}
//   >
//     {/* <MapText> */}
//       <h3>{selectedTrail.name}</h3>
//       <p>
//         {selectedTrail.length}
//         {selectedTrail.gain}
//         {selectedTrail.requiredPass}
//       </p>
//     {/* </MapText> */}
//   </Popup>
// ) : null}