import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import { MAP_URL, MAP_ATTRIBUTION } from '../../constants';

const StyledMap = styled(Map)`
  width: 100%;
  height: 100vh;
`;

// Create a collection of markers
const markers = () => {
  const startLat = 51.4;
  const startLng = -2.1;
  const variance = 0.1;
  const positions = [];
  for (let i = 0; i < 20; i++) {
    const lat = startLat + Math.random() * variance;
    const lng = startLng + Math.random() * variance;
    positions.push([lat, lng]);
  }
  return positions;
};

const Markers = ({ positions }) =>
  positions.map((p, key) => (
    <Marker key={key} position={p}>
      <Popup>{key}</Popup>
    </Marker>
  ));

const LeafletMap = props => {
  const positions = markers();

  return (
    <StyledMap bounds={positions}>
      <TileLayer attribution={MAP_ATTRIBUTION} url={MAP_URL} />
      <Markers positions={positions} />
    </StyledMap>
  );
};

export default LeafletMap;
