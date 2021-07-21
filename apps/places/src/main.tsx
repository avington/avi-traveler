import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import L from 'leaflet';
import 'semantic-ui-css/semantic.min.css';
import 'leaflet/dist/leaflet.css';

import App from './app/app';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
