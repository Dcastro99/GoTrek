// import {ScatterplotLayer} from '@deck.gl/layers';
// import DeckGL from 'deck.gl';


// //    data is an array of object in the shape of:
// //    {
// //      "name":"Montgomery St. (MONT)",
// //      "address":"598 Market Street, San Francisco CA 94104",
// //      "entries":"43430",
// //      "exits":"45128",
// //      "coordinates":[-122.401407,37.789256]
// //    }

// const scatterplotLayer = new ScatterplotLayer({
//   id: 'bart-stations',
//   data: 'https://github.com/visgl/deck.gl-data/blob/master/website/bart-stations.json',
//   getRadius: d => Math.sqrt(d.entries) / 100,
//   getPosition: d => d.coordinates,
//   getColor: [255, 228, 0],
// });


// <DeckGL
//  width="100%" 
//  height="100%" 
//  longitude={-122.4}
//  latitude={37.78} 
//  zoom={8} 
//  controller={true} 
//  layers={[scatterplotLayer]} />