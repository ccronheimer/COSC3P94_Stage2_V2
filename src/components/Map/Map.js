import React from 'react'

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
  return (
    <ComposableMap projection="geoAlbers">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#DDD"
              stroke="#FFF"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[-74.006, 40.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-76.006, 40.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-75.006, 45.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-75.006, 43.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-72.006, 50.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-71.6, 45.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-80.6, 45.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-90.6, 30.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-100.6, 33.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>  
      <Marker coordinates={[-110.6, 35.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-110.6, 23.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-110.6, 43.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Marker coordinates={[-120.6, 43.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
    </ComposableMap>
  );
};

export default Map