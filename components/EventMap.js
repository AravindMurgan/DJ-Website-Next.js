import Image from 'next/image'
import { useState,useEffect } from 'react'
import ReactMapGl,{Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocode from 'react-geocode'

export default function EventMap() {


    const [lat,setLat]=useState(null)
    const [lng,setLng]=useState(null)
    const [loading,setLoading]=useState(true)
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '500px',
        latitude: 40.722772,
        longitude: -73.935242,
        zoom: 12
      });
    return (
        <div>
            MAP
        </div>
    )
}
