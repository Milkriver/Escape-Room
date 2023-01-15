import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_CURRENT } from '../../const';

type Props = {
  coordinates: {
    lat: number;
    long: number;
  };
};

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [23, 42],
});

function Map({ coordinates }: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, coordinates.lat, coordinates.long);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: coordinates.lat,
        lng: coordinates.long
      });

      marker
        .setIcon(currentCustomIcon)
        .addTo(map);
    }
  }, [map, coordinates.lat, coordinates.long]);

  return <div className="map__container" ref={mapRef}></div>;
}

export default Map;


