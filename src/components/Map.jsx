'use client'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React, { useCallback, useState } from 'react'
const containerStyle = {
    width: '100%',
    height: "30vh"
}
// const center = {
//     lat: 31.5217980444476,
//     lng: 74.36008316527771,
// };
const Map = ({ center }) => {
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
            zoom={8}
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