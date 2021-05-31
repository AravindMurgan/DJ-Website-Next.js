import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import ReactMapGl from 'react-map-gl';

export default function EventMap({evt}) {
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [loading, setLoading] = useState(true);
	const [viewport, setViewport] = useState({
		width: '100%',
		height: '500px',
		latitude: 40.722772,
		longitude: -73.935242,
		zoom: 12,
	});

	useEffect(() => {
		// Get latitude & longitude from address.
		Geocode.fromAddress(evt.address).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				setLat(lat);
				setLng(lng);
				setViewport({
					...viewport,
					latitude: lat,
					longitude: lng,
				});
			},
			(error) => {
				console.error(error);
			}
		);
	}, []);

	Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);

	if (loading) {
		return false;
	}

	return (
		<ReactMapGl
			{...viewport}
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
			onViewportChange={(vp) => setViewport(vp)}
		>
           <Marker key={evt.id} latitude={lat} longitude={lng} >
               
            </Marker> 
		</ReactMapGl>
	);
}
