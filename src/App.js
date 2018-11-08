import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

const App = props => {
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [zoom, setZoom] = useState(16);
  const position = [lat, lng];

  return (
    <Map center={position} zoom={zoom}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
      <Marker position={position}>
        <Popup>
          This is a popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default App;
