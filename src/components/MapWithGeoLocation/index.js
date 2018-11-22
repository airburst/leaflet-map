import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import { GeoPosition } from 'react-fns';
import { MAP_URL, MAP_ATTRIBUTION } from '../../constants';

const StyledMap = styled(Map)`
  width: 100%;
  height: 100vh;
`;

const getCoords = ({ latitude, longitude }) => [latitude, longitude];

const LeafletMap = props => {
  return (
    // TODO: Handle error
    <GeoPosition
      render={({ isLoading, coords, error }) =>
        !isLoading && coords ? (
          <StyledMap center={getCoords(coords)} zoom={16}>
            <TileLayer attribution={MAP_ATTRIBUTION} url={MAP_URL} />
            <Marker position={getCoords(coords)}>
              <Popup>Mark</Popup>
            </Marker>
          </StyledMap>
        ) : (
          <div>Loading</div>
        )
      }
    />
  );
};

export default LeafletMap;
