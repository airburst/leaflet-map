import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { GeoPosition } from 'react-fns';
import './Map.css';

const getCoords = ({ latitude, longitude }) => [latitude, longitude];

const LeafletMap = props => {
  // const [lat, setLat] = useState(51.41715608736272);
  // const [lng, setLng] = useState(-2.2100704908370976);
  // const [zoom, setZoom] = useState(16);
  // const position = [lat, lng];

  return (
    <GeoPosition
      render={({ isLoading, coords, error }) =>
        !isLoading && coords ? (
          <Map center={getCoords(coords)} zoom={16}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={getCoords(coords)}>
              <Popup>Mark</Popup>
            </Marker>
          </Map>
        ) : (
          <div>Loading</div>
        )
      }
    />
  );
};

export default LeafletMap;
