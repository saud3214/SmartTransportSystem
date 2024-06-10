// components/MapContainer.tsx
import React from 'react'

import { GoogleMap, LoadScript } from '@react-google-maps/api'

const MapContainer: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey='AIzaSyDlhBI18w0QBw8wtXbmlAsoJrBfSlXiOOM'>
      <GoogleMap
        mapContainerStyle={{ height: '504PX', width: '100%' }}
        zoom={6}
        center={{ lat: 37.774929, lng: -122.419418 }}
      />
    </LoadScript>
  )
}

export default MapContainer
