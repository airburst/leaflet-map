import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

// Lazy load the map
// const LeafletMap = React.lazy(() => import('./components/Map'));
// const LeafletGeoMap = React.lazy(() =>
//   import('./components/MapWithGeoLocation')
// );
const LeafletBoundedMap = React.lazy(() =>
  import('./components/MapWithBounds')
);

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    {/* <LeafletMap /> */}
    {/* <LeafletGeoMap /> */}
    <LeafletBoundedMap />
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
