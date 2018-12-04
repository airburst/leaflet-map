import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup, Circle, Polyline } from 'react-leaflet';
import L from 'leaflet';
import styled from 'styled-components';
import { MAP_URL, MAP_ATTRIBUTION } from '../../constants';

const StyledMap = styled(Map)`
  width: 100%;
  height: 100vh;
`;

var myIcon = L.icon({
  iconUrl: './assets/marker-person.png',
  iconSize: [64, 93],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

const LeafletMap = props => {
  const [lat, setLat] = useState(51.41715608736272);
  const [lng, setLng] = useState(-2.2100704908370976);
  const [zoom, setZoom] = useState(16);
  const position = [lat, lng];

  const marker2 = [51.4, -2.21];
  const marker3 = [51.3, -2.11];

  const clickHandler = e => {
    const { latlng } = e;
    console.log(latlng);
  };

  return (
    <StyledMap center={position} zoom={zoom} onclick={clickHandler}>
      <TileLayer attribution={MAP_ATTRIBUTION} url={MAP_URL} />
      <Marker position={position} icon={myIcon}>
        <Popup>Mark</Popup>
      </Marker>

      <Circle center={position} radius={500} fillColor="red" color="red" />

      <Marker position={marker2} />
      <Polyline positions={[position, marker2, marker3]} color="red" />
    </StyledMap>
  );
};

export default LeafletMap;
