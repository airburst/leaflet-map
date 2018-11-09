import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import './Map.css';

const LeafletMap = props => {
  const [lat, setLat] = useState(51.41715608736272);
  const [lng, setLng] = useState(-2.2100704908370976);
  const [zoom, setZoom] = useState(16);
  const position = [lat, lng];

  const marker2 = [51.4, -2.21];

  const clickHandler = e => {
    const { latlng } = e;
    console.log(latlng);
  }

  return (
    <Map center={position} zoom={zoom} onclick={clickHandler}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position}>
        <Popup>
          This is a popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={marker2} />

      <Circle center={position} radius={500} fillColor="red" color="red" />
    </Map>
  );
};

/**
 * Some other map providers below. Change the TileLayer attribution and url:

  Standard:
  <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

  Watercolour (max zoom = 16):
  <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg' />

  Thunderforest: https://manage.thunderforest.com

    Landscape: https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={REACT_APP_API_KEY}
    Outdoors:  https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={REACT_APP_API_KEY}
    Cycle Map: https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={REACT_APP_API_KEY}

    Thunderforest attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 */

export default LeafletMap;
