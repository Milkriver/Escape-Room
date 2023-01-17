import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_CURRENT } from '../../const';

type Props = {
  coordinates: number[];
};

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [23, 42],
});

function Map({ coordinates }: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, coordinates[0], coordinates[1]);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: coordinates[0],
        lng: coordinates[1]
      });

      marker
        .setIcon(currentCustomIcon)
        .addTo(map);
    }
  }, [map, coordinates]);

  return <div className="map__container" ref={mapRef}></div>;
}

export default Map;


