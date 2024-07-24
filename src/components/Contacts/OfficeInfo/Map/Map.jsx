'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslations } from 'next-intl';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

const Map = () => {
  const t = useTranslations('contacts');
  const position = [22.69929498332093, 113.93119620903194];

  return (
    <MapContainer
      preferCanvas={true}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '650px', width: '100%' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{t('office-details.address.value')}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
