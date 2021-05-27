import EventsItem from '@/components/EventsItem';
import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import { useRouter } from 'next/router';

export default function EventsPage({ events }) {
	const router = useRouter();
	return (
		<Layout>
			<h1> Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map((evt) => (
				<EventsItem key={evt.id} evt={evt} />
			))}
		</Layout>
	);
}

export async function getServerSideProps({ query: { page = 1 } }) {
	
	//calculate start page//
	const start = +page === 1 ? 0 : (+page-1)* PER_PAGE
	
	//total Events//
	const totalRes = await fetch(`${API_URL}/events/count`)
	const total = totalRes.json()

	//Fetch Events
	const eventRes = await fetch(
		`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
	);
	const events = await eventRes.json();

	return {
		props: { events,page: +page ,total },
	};
}
