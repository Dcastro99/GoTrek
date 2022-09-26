import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../../assets/styles/leaflet.css';

// import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { MapContainer } from './mapElements';
import ReactMapGl from 'react-map-gl';

// const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function ReactMap(){

    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: '50vw',
        height: '50vh',
        zoom: 10,
    });

    return (
        // <MapContainer>
            <ReactMapGl {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => {setViewport(viewport)}}
            >
            <h1>Hello world</h1>
            </ReactMapGl>
        // </MapContainer>
    )
}

export default ReactMap;
// function DataFetching(){
//     return(
//         <ComposableMap>
//             <Geographies geography={geoUrl}>
//                 {({geographies }) => 
//                 geographies.map((geo) => (
//                     <Geography key={geo.rsmKey} geography={geo} />
//                 ))
//                 }
//             </Geographies>
//         </ComposableMap>
//     )
// }

// function DataFetching() {
//     const [post, setPost] = useState({});
//     const [id, setId] = useState(1);

//     const url = 'http://api.openstreetmap.org/';
//     useEffect(() => {
//         axios.get(url).then(res => {
//             console.log(res);
//             setPost(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }, [id, url]);
//   return (
//     <div>
//         <div></div>
//         <input type="text" value={id} onChange={e => setId(e.target.value)} />
//         {/* <ul>
//             {
//                 post.map(post => (<li key={post.id}>{post.title}</li>)
//            )};
//         </ul> */}
//         <div>{post.title}</div>
//     </div>
//   )
// }


// function DataFetching() {
//     const [post, setPost] = useState({});
//     const [id, setId] = useState(1);

//     const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
//     useEffect(() => {
//         axios.get(url).then(res => {
//             console.log(res);
//             setPost(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }, [id, url]);
//   return (
//     <div>
//         <input type="text" value={id} onChange={e => setId(e.target.value)} />
//         {/* <ul>
//             {
//                 post.map(post => (<li key={post.id}>{post.title}</li>)
//            )};
//         </ul> */}
//         <div>{post.title}</div>
//     </div>
//   )
// }

