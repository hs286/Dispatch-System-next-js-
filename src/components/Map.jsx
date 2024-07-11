'use client'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React, { useCallback, useState } from 'react'
const containerStyle = {
    width: 'auto',
    height: '400px'
}
const center = {
    lat: -3.745,
    lng: -38.523,
};
const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDCQ_UrxKRUnMpP_f7mnT0BxZcjcSnp7EY'
    })
    const [map, setMap] = useState(null);
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)
        setMap(map)
    }, [])
    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
            onLoad={onLoad}
            onUnmount={onUnmount}


        >

            <></>
        </GoogleMap>
    ) : (
        <div>Loading...</div>
    );
};


export default Map